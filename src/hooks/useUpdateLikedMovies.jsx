import { useContext, useState } from "react";
import { arrayRemove, arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../context/userContext";
import { db } from "../firebase/config";

// Small toast component returned by liked movie mutation hooks.
function Toast({ children }) {
  return (
    <div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg">
      {children}
    </div>
  );
}

// Hook for managing the signed-in user's liked movies collection.
export default function useUpdateLikedMovies() {
  const { User } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  // Show short-lived feedback after Firestore updates complete.
  const showMessage = (value) => {
    setMessage(value);
    window.setTimeout(() => setMessage(""), 1800);
  };

  // Use Firestore array operations and create the document if it is missing.
  const updateLikedMovies = async (movie, operation) => {
    if (!User?.uid || !movie?.id) return;
    const ref = doc(db, "LikedMovies", User.uid);
    try {
      await updateDoc(ref, { movies: operation(movie) });
    } catch {
      await setDoc(ref, { movies: operation === arrayUnion ? [movie] : [] }, { merge: true });
    }
  };

  // Add the selected movie to liked movies.
  const addToLikedMovies = async (movie) => {
    await updateLikedMovies(movie, arrayUnion);
    showMessage("Added to liked movies");
  };

  // Remove the selected movie from liked movies.
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
