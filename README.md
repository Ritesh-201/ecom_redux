
# Redux-Ecom

A minimal, modern e-commerce frontend built with React, Redux Toolkit, and Vite.

## Features
- Responsive navbar with hamburger menu
- Home, Store, Cart, Order History, and Help pages
- Product listing and cart management (add/remove/clear)
- Redux Toolkit for state management (cart, UI)
- Modular structure: components, features, slices
- Tooltip component for UI hints
- Clean, professional, and mobile-friendly design

## Project Structure

- `src/components/` — Reusable UI components (Navbar, Tooltip, HamburgerIcon)
- `src/pages/` — Main app pages (Home, Store, Cart, OrderHistory, Help)
- `src/features/cart/` — Cart slice, product data, and cart UI
- `src/features/ui/` — UI slice for theme/tooltips
- `src/app/store.js` — Redux store setup

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) to view the app.

## Learnings & Concepts
- React components and hooks
- React Router for navigation
- Redux Toolkit for scalable state management
- Slices for feature separation
- Responsive CSS modules

## Customization
- Add more products in `src/features/cart/products.js`
- Extend Redux slices for new features
- Tweak styles in module CSS files

---
Made with ❤️ using React, Redux Toolkit, and Vite.
