# 🇳🇵 NflixNepal — Premium High-Fidelity Netflix Clone 🎬

[![React](https://img.shields.io/badge/React-18.2-blue.svg?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Firebase](https://img.shields.io/badge/Firebase-12.13-FFCA28.svg?logo=firebase&logoColor=black)](https://firebase.google.com)
[![Sass](https://img.shields.io/badge/Sass-1.100-CC6699.svg?logo=sass&logoColor=white)](https://sass-lang.com)

**NflixNepal** is a premium, state-of-the-art cinematic web application modeled after Netflix, with tailored localization enhancements for Nepal. Powered by React, Vite, Sass, and Tailwind CSS, it leverages the **TMDB API** for a rich catalog of global & regional media, and integrates a personal **Firebase instance** for robust user authentication, user watchlists, watch history, and personalized likes.

---

## 🌟 Key Features

- 🔐 **Firebase-powered Authentication:** Secure, robust user registration, login, and customized profile setup.
- 🍿 **Dynamic Cinematic Showcase:** A captivating hero banner showcasing trending content with high-definition auto-playing video trailers/teasers.
- 🎭 **Curated Categorized Rows:** Browse fluid rows of Action, Comedy, Horror, Romance, Documentaries, and other major genres powered by SwiperJS.
- 🔍 **Interactive Real-time Search:** Effortlessly find your favorite movies or shows with high-performance instant searching.
- 📋 **Personalized Watch Rooms:**
  - **My List / Watchlist:** Save shows and movies you want to view later.
  - **Liked Room:** Curate your absolute favorite cinematic highlights.
  - **History Room:** Track your previously viewed movies or series seamlessly.
- 🎨 **Rich & Immersive UI/UX:** Sleek dark-mode aesthetic with custom-tailored Glassmorphic components, micro-animations, and smooth responsive layout transitions.

---

## 🛠️ Technology Stack

- **Frontend Core:** [React 18](https://react.dev/) & [Vite](https://vitejs.dev/) (lightning-fast HMR)
- **Styling & Presentation:** [Tailwind CSS](https://tailwindcss.com/) & [Sass / SCSS Modules](https://sass-lang.com/) for maximum layout control
- **Backend-as-a-Service:** [Firebase v12](https://firebase.google.com/) (Auth & Firestore database)
- **API Integration:** [Axios](https://axios-http.com/) for TMDB (The Movie Database) communication
- **Animations & Carousels:** [Swiper](https://swiperjs.com/) for touch-friendly horizontal rows
- **Toast Notifications:** [React Hot Toast](https://react-hot-toast.com/) for elegant alert handling
- **Rating Indicators:** [React Star Ratings](https://github.com/nmarotta/react-star-ratings) for beautiful star previews

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple installation steps.

### 📋 Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your machine.

### ⚙️ Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/NflixNepal.git
   cd NflixNepal
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Duplicate the `.env.example` file and rename it to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and populate it with your TMDB and Firebase API credentials:
     ```env
     VITE_TMDB_API_KEY=your_tmdb_api_key_here
     VITE_FIREBASE_API_KEY=your_firebase_api_key_here
     ...
     ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to explore NflixNepal!

---

## 🧪 Commands Reference

Here are the scripts available in `package.json`:

- `npm run dev` - Starts the development server with Hot Module Replacement (HMR).
- `npm run build` - Builds a highly optimized production bundle in the `dist` directory.
- `npm run lint` - Automatically inspects your files using ESLint to maintain clean, production-ready code formatting.
- `npm run preview` - Runs a local preview of the production-built bundle.

---

## 🤝 Contribution

Contributions make the open-source community an amazing place to learn, inspire, and create.
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

*Made with ❤️ for cinema enthusiasts in Nepal & beyond.*
