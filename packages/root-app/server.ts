import type { Request, Response, NextFunction } from "express";
import fs from "fs/promises";
import path, { dirname } from "path";
import express from "express";
import compression from "compression";
import serveStatic from "serve-static";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resolve = (p: string) => path.resolve(__dirname, p);

async function createServer(isProd = process.env.NODE_ENV === "production") {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    root: isProd ? "dist" : "",
    optimizeDeps: { include: [] },
  });

  app.use(vite.middlewares);
  const assetsDir = resolve("public");
  const requestHandler = express.static(assetsDir);
  app.use(requestHandler);
  app.use("/public", requestHandler);

  if (isProd) {
    app.use(compression());
    app.use(
      serveStatic(resolve("client"), {
        index: false,
      })
    );
  }

  const baseTemplate = await fs.readFile(
    isProd ? resolve("client/index.html") : resolve("index.html"),
    "utf-8"
  );
  const productionBuildPath = path.join(
    __dirname,
    "./server/client/entry-server.js"
  );
  const devBuildPath = path.join(__dirname, "./src/client/entry-server.tsx");
  const buildModule = isProd ? productionBuildPath : devBuildPath;
  const { render } = await vite.ssrLoadModule(buildModule);

  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      const template = await vite.transformIndexHtml(url, baseTemplate);

      const appHtml = await render(url);

      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e: any) {
      !isProd && vite.ssrFixStacktrace(e);
      console.log(e.stack);

      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
  const port = process.env.PORT || 3000;
  app.listen(Number(port), "0.0.0.0", () => {
    console.log(`App is listening on http://localhost:${port}`);
  });
}

createServer();
