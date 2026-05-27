// Main application component containing routing, lazy-loaded pages, and global authentication state listener
import { useEffect, useContext, lazy, Suspense } from "react";

// Lazy-loaded page components for optimized bundle size and faster initial load
const Home = lazy(() => import("./pages/Home"));
const Series = lazy(() => import("./pages/Series"));
const Search = lazy(() => import("./pages/Search"));
const Profile = lazy(() => import("./pages/Profile"));
const MyList = lazy(() => import("./pages/MyList"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Welcome = lazy(() => import("./pages/Welcome"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Play = lazy(() => import("./pages/Play"));
const LikedMovies = lazy(() => import("./pages/LikedMovies"));
const History = lazy(() => import("./pages/History"));

import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/userContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "./components/ui/loading";
import Navbar from "./components/layout/Header/navbar";
import NavbarWithoutUser from "./components/layout/Header/navbarWithoutUser";
import MoviePopUp from "./components/ui/moviePopUp";
import { PopUpContext } from "./context/moviePopUpContext";

function App() {
  const { User, setUser } = useContext(AuthContext);
  const { showModal, popupMovie, popupFrom, popupVideo } =
    useContext(PopUpContext);

  // Synchronize global authentication state with Firebase Auth.
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up the Firebase listener when the app unmounts.
    return unsubscribe;
  }, [setUser]);

  // Route access is derived from the current auth session.
  return (
    <div>
      {User ? <Navbar /> : <NavbarWithoutUser />}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index path="/" element={User ? <Home /> : <Welcome />} />
          {User ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/mylist" element={<MyList />} />
              <Route path="/liked" element={<LikedMovies />} />
              <Route path="/history" element={<History />} />
              <Route path="/play/:id" element={<Play />} />
            </>
          ) : null}
          <Route path="/play/:id" element={<Play />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      {showModal && popupMovie ? (
        <MoviePopUp data1={popupMovie} data2={popupVideo} from={popupFrom} />
      ) : null}
    </div>
  );
}

export default App;
