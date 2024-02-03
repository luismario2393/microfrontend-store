# React + TypeScript + Vite + vite-plugin-federation +

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

```js

```

## microfrontend-store

- This is a microfrontend store application using Vite and Webpack 5 Module Federation.
- This project is a monorepo that contains the following packages:
  - `root-app`: The main application that imports the `root-app` and `product` microfrontends.
  - `product`: A microfrontend that displays a list of products.
  - `about`: A microfrontend that about.

## Libraries

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [vite-plugin-federation](https://www.npmjs.com/package/@originjs/vite-plugin-federation)
- [webpack](https://webpack.js.org/)
- [webpack 5 Module Federation](https://webpack.js.org/concepts/module-federation/)
- [pnpm](https://pnpm.io/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [zustand](https://zustand-demo.pmnd.rs/)
- [ssr](https://vitejs.dev/guide/ssr.html)

## Installation

```bash
- git clone https://github.com/luismario2393/microfrontend-store.git
- cd microfrontend-store
- pnpm install
- pnpm run dev
```

## Arquitectura recomendada para una aplicación microfrontend SEO-friendly:

1. Desarrollar los microfrontends con Single-SPA el cual permite una gestión eficiente de la carga de scripts y estilos, evitando el bloqueo del renderizado, tambien facilita la implementación de estrategias de SEO como la precarga de recursos.

- Utilizar NextJs para el renderizado del lado del servidor (SSR) para los microfrontends que requieran una mejor indexación en los motores de búsqueda.

2. Implementar un servidor web estatico el cual ofrece un mejor rendimiento y escalabilidad.

3. Optimización SEO:

- Metadatos:

- Implementar metaetiquetas relevantes (título, descripción, palabras clave) en cada microfrontend.
  Optimizar las metaetiquetas para cada página y contenido específico.

- Contenido:

- Crear contenido único, relevante y de alta calidad para cada microfrontend.
- Optimizar el contenido para las palabras clave objetivo.
- Implementar una estructura de encabezados adecuada (H1, H2, H3) para mejorar la legibilidad.

- Enlaces:

- Utilizar enlaces internos relevantes entre los microfrontends.
