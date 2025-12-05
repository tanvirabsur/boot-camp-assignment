# Boot Camp Assignment (React + Vite)

This repository contains a React single-page application scaffolded with Vite. It includes a small college listing UI, Firebase-based Google authentication, and client-side routing using React Router.

This README documents how to set up, run, and debug the project locally and explains a few project-specific components and troubleshooting tips.

**Quick Links**
- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`

**Prerequisites**
- Node.js (LTS) installed. Verify with `node -v` and `npm -v`.
- (Windows) PowerShell: If you see a script execution error when running `npm` ("running scripts is disabled on this system"), change the execution policy for your user:

```powershell
Get-ExecutionPolicy -List
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
```

Or run the dev server once without changing policy:

```powershell
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

Getting started
1. Install dependencies:

```powershell
npm install
```

2. Run the development server:

```powershell
npm run dev
```

Project structure (important files)
- `index.html` — app entry HTML
- `src/main.jsx` — app bootstrap (loads `index.css`, `AuthProvider` and `Router`)
- `src/App.jsx` — top-level App component
- `src/index.css` / `src/App.css` — project CSS (Tailwind directives expected)
- `src/router/Router.jsx` — React Router routes
- `src/Hooks/AuthProvider.jsx` — Firebase auth context/provider
- `src/Hooks/PrivateRoute.jsx` — route guard component (redirects unauthenticated users)
- `src/Components/FeaturedCollegesSection.jsx` — featured colleges UI + search
- `src/Components/CollegeCard.jsx` — college card UI

Tailwind CSS notes
- This project intends to use Tailwind CSS. To ensure Tailwind classes are generated and utility classes like `aspect-[4/3]` work, confirm these steps are done:

1. In your main CSS file (project uses `src/index.css`) include the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. Add a `tailwind.config.cjs` at the project root with content scanning configured, for example:

```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
```

3. If PostCSS tooling is missing, install dev dependencies:

```powershell
npm install -D postcss autoprefixer
```

If you do not want to fully enable Tailwind now, you can avoid Tailwind-specific errors by replacing utility classes that rely on Tailwind (e.g. `aspect-[4/3]`) with standard inline styles: `style={{ aspectRatio: '4/3' }}`.

Authentication and Private Routes
- `AuthProvider` exposes `{ user, loading, signinWithGoogle }` via React Context. Wrap your app with `AuthProvider` (already done in `main.jsx`).
- `PrivateRoute` uses `useContext(AuthContext)` and `react-router-dom` to redirect unauthenticated users to `/login`. On redirect it sets `state.from` to the original pathname so your login page can redirect back:

```js
const location = useLocation();
const from = location.state?.from || '/';
```

Common issues and debugging
- Error: `TypeError: featuredColleges?.map is not a function`
  - Cause: `featuredColleges` was not an array (for example, setState called with a single object). Fix: ensure the component derives an array (e.g. `colleges.slice(0,3)`) or that the parent passes an array prop.

- Error: `Cannot destructure property 'user' of 'use(...)' as it is undefined`
  - Cause: `AuthProvider` must return `<AuthContext.Provider value={...}>` (not `<AuthContext value={...}>`). Also ensure `useContext(AuthContext)` is used in consumers.

- PowerShell `npm` script security error
  - Solution: run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force` (see above) or use the `.cmd` wrapper: `npm.cmd run dev`.

Development tips
- When you change context providers or routing, restart Vite to ensure fresh module state.
- Avoid calling `setState` during render — use `useMemo` or `useEffect` appropriately.

Contributing
- Open PRs against the `main` branch. Keep changes focused; run `npm run lint` (ESLint) before submitting.

License
- This repository does not include a license file. Add one if you intend to publish.

If you'd like, I can:
- Add `tailwind.config.cjs` and update `src/index.css` for you now, or
- Update the `Login` component to redirect back to `location.state.from` after sign-in.

Questions? Tell me which next step you want me to take and I will apply it.
