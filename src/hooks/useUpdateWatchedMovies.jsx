import { useContext, useState } from "react";
import { arrayRemove, doc, setDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../context/userContext";
import { db } from "../firebase/config";

// Small toast component returned after watched movie mutations.
function Toast({ children }) {
  return (
    <div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg">
      {children}
    </div>
  );
}

// Hook for removing titles from the signed-in user's watch history.
export default function useUpdateWatchedMovies() {
  const { User } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  // Remove a movie from history and create an empty document if needed.
  const removeFromWatchedMovies = async (movie) => {
    if (!User?.uid || !movie?.id) return;
    const ref = doc(db, "WatchedMovies", User.uid);
    try {
      await updateDoc(ref, { movies: arrayRemove(movie) });
    } catch {
      await setDoc(ref, { movies: [] }, { merge: true });
    }
    // Keep feedback local to the action and clear it automatically.
    setMessage("Removed from watched movies");
    window.setTimeout(() => setMessage(""), 1800);
  };

  return {
    removeFromWatchedMovies,
    removePopupMessage: message ? <Toast>{message}</Toast> : null,
  };
}
