import { Route, Routes } from "react-router-dom";
import {
  CircularProgress,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { lightTheme } from "./themes";
import { globalStyles } from "./themes/global";
import Home from "./components/home";
import Layout from "./components/layout";
import "./index.css";
import { Suspense, lazy } from "react";
import Product from "./components/product";

const ProductApplication = lazy(() => import("products-mfe/App"));
const AboutApplication = lazy(() => import("about-mfe/App"));

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles styles={globalStyles} />
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Suspense fallback={<CircularProgress />}>
                <ProductApplication />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<CircularProgress />}>
                <AboutApplication />
              </Suspense>
            }
          />
          <Route path="/products/:id" element={<Product />} />

          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
