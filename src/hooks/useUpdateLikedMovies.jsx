import { useContext, useState } from "react";
import { arrayRemove, arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../context/userContext";
import { db } from "../firebase/config";

function Toast({ children }) {
  return (
    <div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg">
      {children}
    </div>
  );
}

export default function useUpdateLikedMovies() {
  const { User } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const showMessage = (value) => {
    setMessage(value);
    window.setTimeout(() => setMessage(""), 1800);
  };

  const updateLikedMovies = async (movie, operation) => {
    if (!User?.uid || !movie?.id) return;
    const ref = doc(db, "LikedMovies", User.uid);
    try {
      await updateDoc(ref, { movies: operation(movie) });
    } catch {
      await setDoc(ref, { movies: operation === arrayUnion ? [movie] : [] }, { merge: true });
    }
  };

  const addToLikedMovies = async (movie) => {
    await updateLikedMovies(movie, arrayUnion);
    showMessage("Added to liked movies");
  };

  const removeFromLikedMovies = async (movie) => {
    await updateLikedMovies(movie, arrayRemove);
    showMessage("Removed from liked movies");
  };

  return {
    addToLikedMovies,
    removeFromLikedMovies,
    LikedMoviePopupMessage: message ? <Toast>{message}</Toast> : null,
  };
}
