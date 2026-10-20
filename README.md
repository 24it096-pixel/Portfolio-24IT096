# Student Portfolio - 24IT096

A modern, responsive student portfolio web application built with **React**, **Vite**, and **React Router v6**.

## Project Evolution & Practicals

### Practical 1: Introduction to React & Component Architecture
- Component-based structure with reusable components:
  - `Header`: Site title & student name (`Student 24IT096`).
  - `About`: Bio statement.
  - `Skills`: Dynamic skill badges rendered via props.
  - `Footer`: Contact & copyright details.
- Clean JSX syntax with expressions and scoped CSS.

### Practical 2: State Management & Routing in React
- Client-side routing with `react-router-dom`:
  - `/`: **Home** (Hero, About, and Skills)
  - `/projects`: **Projects** (Showcasing student projects with category filter)
  - `/contact`: **Contact** (Controlled form capturing input with live real-time preview and character counter)
  - `*`: **404 Not Found** (Custom error handling route)
- Navigation bar (`NavBar`) using `<Link>` elements to prevent full page reloads.
- Reactive state management with `useState`.

### Practical 8: Performance Optimization & Lazy Loading
- **Route-based Code Splitting**: Implemented dynamic imports with `React.lazy()` for route components:
  - `Home`: `lazy(() => import('./components/Home'))`
  - `Projects`: `lazy(() => import('./components/Projects'))`
  - `Contact`: `lazy(() => import('./components/Contact'))`
  - `NotFound`: `lazy(() => import('./components/NotFound'))`
- **Suspense Fallback UI**: Wrapped all routes in `<Suspense fallback={<LoadingSpinner />}>` with animated loading indicators.
- **Bundle Measurement (Before vs After)**:

| Metric | Before Optimization | After Lazy Loading (P8) | Improvement |
| :--- | :--- | :--- | :--- |
| **Initial JS Bundle Size** | **265.96 kB** (gzip: 84.51 kB) | **260.79 kB** (gzip: 82.82 kB) | **~5.17 kB reduction upfront** |
| **Route Chunks** | None (Single monolith bundle) | Split into 4 on-demand chunks | Loaded only upon navigation |
| `Home.chunk.js` | Embedded in main bundle | **1.50 kB** (gzip: 0.66 kB) | On-demand |
| `Projects.chunk.js` | Embedded in main bundle | **2.10 kB** (gzip: 0.98 kB) | On-demand |
| `Contact.chunk.js` | Embedded in main bundle | **1.92 kB** (gzip: 0.88 kB) | On-demand |
| `NotFound.chunk.js` | Embedded in main bundle | **0.53 kB** (gzip: 0.29 kB) | On-demand |
