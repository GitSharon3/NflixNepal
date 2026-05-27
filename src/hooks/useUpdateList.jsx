import { useContext, useState } from "react";
import { arrayRemove, arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../context/userContext";
import { db } from "../firebase/config";

// Small toast component returned by list mutation hooks.
function Toast({ children }) {
  return (
    <div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg">
      {children}
    </div>
  );
}

// Hook for adding and removing movies from the signed-in user's My List.
export default function useUpdateMylist() {
  const { User } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  // Show short-lived feedback after Firestore updates complete.
  const showMessage = (value) => {
    setMessage(value);
    window.setTimeout(() => setMessage(""), 1800);
  };

  // Use Firestore array operations and create the document if it is missing.
  const updateList = async (movie, operation) => {
    if (!User?.uid || !movie?.id) return;
    const ref = doc(db, "MyList", User.uid);
    try {
      await updateDoc(ref, { movies: operation(movie) });
    } catch {
      await setDoc(ref, { movies: operation === arrayUnion ? [movie] : [] }, { merge: true });
    }
  };

  // Add the selected movie without duplicating existing array entries.
  const addToMyList = async (movie) => {
    await updateList(movie, arrayUnion);
    showMessage("Added to My List");
  };

  // Remove the selected movie from the user's saved collection.
  const removeFromMyList = async (movie) => {
    await updateList(movie, arrayRemove);
    showMessage("Removed from My List");
  };

  return {
    addToMyList,
    removeFromMyList,
    PopupMessage: message ? <Toast>{message}</Toast> : null,
  };
}
