# 🇳🇵 NflixNepal — Ultimate High-Fidelity Netflix Clone 🎬

[![React](https://img.shields.io/badge/React-18.2-blue.svg?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Firebase](https://img.shields.io/badge/Firebase-12.13-FFCA28.svg?logo=firebase&logoColor=black)](https://firebase.google.com)
[![Sass](https://img.shields.io/badge/Sass-1.100-CC6699.svg?logo=sass&logoColor=white)](https://sass-lang.com)

**NflixNepal** is a premium cinematic application modeled after Netflix, with tailored localization enhancements for Nepal. This codebase is structured to modern developer standards, utilizing React, Vite, Tailwind CSS, Sass, TMDB API, and Firebase integration.

---

## 🌟 Key Application Features

- 🔐 **Firebase Authentication:** Secure user registration, sign-in, and persistent session state.
- 🍿 **Cinematic Showcase Banner:** Captivating hero header featuring trending movies with smooth auto-playing video trailers/teasers.
- 🎭 **Curated Rows by Genre:** Browse fluid, touch-friendly rows of Action, Comedy, Horror, Romance, Documentaries, and regional recommendations.
- 🔍 **Real-time Live Search:** Fast and responsive movie/series discovery.
- 📋 **Personalized User Libraries:**
  - **My List:** Standard watchlist to bookmark items for later viewing.
  - **Liked Room:** Collection of user's liked content.
  - **History Room:** Tracking recently watched movies or series.

---

## 🛠️ Complete Tools & Dependencies Breakdown

Below is an exhaustive breakdown of the architectural packages and tools used to power NflixNepal, as defined in our configuration:

### ⚡ Core Framework & Runtime
* **[React (v18.2.0) & React-DOM](https://react.dev/):** The engine of our declarative, component-based user interface.
* **[Vite (v5.0.0)](https://vitejs.dev/):** Next-generation frontend tooling. Vite offers exceptionally fast Hot Module Replacement (HMR) and uses Rollup behind the scenes for highly optimized production assets.
* **[React Router DOM (v7.15.1)](https://reactrouter.com/):** Handles client-side navigation and routing throughout pages (SignIn, SignUp, Profile, Home, Search, Play, Error, etc.).

### 🗄️ Backend, Database, & API Client
* **[Firebase (v12.13.0)](https://firebase.google.com/):** Powers database syncing (for watchlists, likes, and watch history) and user state management (Authentication & Firestore integration).
* **[Axios (v1.6.0)](https://axios-http.com/):** A promise-based HTTP client used to seamlessly request and fetch media details from TMDB (The Movie Database) endpoints.

### 🎨 Styling & Component Libraries
* **[Tailwind CSS (v3.4.0)](https://tailwindcss.com/) & [Autoprefixer](https://github.com/postcss/autoprefixer):** A utility-first CSS framework combined with automatic vendor prefixing to guarantee cross-browser compatibility.
* **[Sass (v1.100.0)](https://sass-lang.com/):** Modern Dart Sass compiler allowing us to leverage variables, nested layouts, and scoped CSS/SCSS modules (`styles.module.scss`).
* **[PostCSS](https://postcss.org/):** A tool for transforming CSS with JavaScript plugins, used to run Autoprefixer and Tailwind CSS compilation.
* **[Swiper (v12.1.4)](https://swiperjs.com/):** Modern mobile-friendly hardware-accelerated carousel component used to create gorgeous movie row sliders.
* **[React Hot Toast (v2.6.0)](https://react-hot-toast.com/):** Beautiful, lightweight toast notification popup utility for actions (e.g., "Added to Watchlist", "Signed In Successfully").
* **[React Star Ratings (v2.3.0)](https://github.com/nmarotta/react-star-ratings):** High-quality customizable SVG star components to display accurate user ratings for films.
* **[React Spinners (v0.17.0)](https://github.com/davidhu2000/react-spinners):** Elegant loading indicators to match Netflix's premium dark aesthetics during dynamic content fetching.

### 🔬 Quality Assurance & Linting
* **[ESLint (v8.57.0) & @eslint/js](https://eslint.org/):** Code static analysis tool setup with customized plugins (`eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `globals`) to enforce code consistency, clean syntax, and error-free hooks.

---

## 📁 System Configuration Files Explained

* **`vite.config.js`:** The configuration script for Vite. Registers the official React plugin (`@vitejs/plugin-react`) to compile JSX elements using speedy Babel transforms.
* **`tailwind.config.cjs` & `postcss.config.cjs`:** Define customized layouts, breakpoints, custom color utilities, and configure tailwind to purge unused CSS on production builds.
* **`eslint.config.js`:** Custom rules enforcing high standards of React architecture, and ensuring React Refresh modules run correctly.
* **`.gitignore`:** Formatted to strictly prevent node packages (`node_modules`), build logs, specific IDE files, compile results (`dist`), and local secrets (`.env`) from leaking into public Git commits.

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### ⚙️ Local Installation & Development Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/NflixNepal.git
   cd NflixNepal
   ```

2. **Install all Dependencies:**
   ```bash
   npm install
   ```

3. **Establish Environment Variables:**
   - Duplicate the included template:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and enter your personal API credentials:
     ```env
     # TMDB API Configuration
     VITE_TMDB_API_KEY=your_tmdb_api_key_here

     # Firebase Configuration
     VITE_FIREBASE_API_KEY=your_firebase_api_key_here
     VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
     VITE_FIREBASE_PROJECT_ID=your_firebase_project_id_here
     VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket_here
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id_here
     VITE_FIREBASE_APP_ID=your_firebase_app_id_here
     VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id_here
     ```

4. **Boot Development Environment:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view the live build!

---

## 🧪 Available Scripts

Run these in your command terminal:
* `npm run dev` - Launches the local development server with premium HMR support.
* `npm run lint` - Runs high-standard static analysis checks across the codebase.
* `npm run build` - Builds and tree-shakes production bundle code inside `dist/`.
* `npm run preview` - Runs a local preview of the production `dist/` builds.

---

*Made with ❤️ for cinema enthusiasts in Nepal & beyond by Sharon <3.*
