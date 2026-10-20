# Student Portfolio - 24IT096

A modern, responsive student portfolio web application built with **React**, **Vite**, and **React Router v6**.

## Features & Practicals

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
- Reactive state management with `useState`:
  - Form input state (`message`) with real-time reactive rendering and character counting.
  - UI visibility toggle (`showTooltip`) for help instructions.
