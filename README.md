# PartyWitty React Assessment

React implementation of the PartyWitty assessment based on the provided Figma design.

Figma reference:
https://www.figma.com/design/muObNYW6iETWbBJ6Z88vcp/Assessment---React?node-id=0-1&t=pMR1TIqM9HgUkwMK-1

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React icons

## Setup Instructions

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the project in development mode.

```bash
npm run build
```

Creates a production build in the `dist` folder.

```bash
npm run preview
```

Runs a local preview of the production build.

```bash
npm run lint
```

Runs ESLint checks for the project.

## Project Structure

```text
src/
  assets/       Static images and SVG/icon assets
  components/   Layout and reusable UI components
    common/     Shared buttons, avatars, verified labels, and form controls
  pages/        Route-level screens
  App.jsx       Application routes/layout
  main.jsx      React entry point
  index.css     Global styles and Tailwind imports
```

## Implementation Notes

- The UI has been developed to closely match the PartyWitty Figma assessment design.
- Sidebar navigation is component-driven and uses reusable SVG/icon components.
- The layout supports expanded and collapsed sidebar states.
- Static assets are organized under `src/assets`.
- Routes are managed with `react-router-dom`.
- Styling is handled with Tailwind utility classes for consistency and maintainability.

## Evaluation Notes

The assessment focuses on:

- Design accuracy compared with the Figma file
- Component reusability
- Code stability
- Functional navigation and layout behavior
- Ability to support future changes and improvements

## Build Verification

The project can be verified with:

```bash
npm run build
```

If the build completes successfully, the production-ready files will be generated in `dist/`.
