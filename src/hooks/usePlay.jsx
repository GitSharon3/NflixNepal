import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../context/userContext";

// Hook centralizing play navigation and watch-history persistence.
export default function usePlayMovie() {
  const navigate = useNavigate();
  const { User } = useContext(AuthContext);

  // Record watched movies for authenticated users before navigating to playback.
  const playMovie = async (movie) => {
    if (!movie?.id) return;

    if (User?.uid) {
      const ref = doc(db, "WatchedMovies", User.uid);
      try {
        // Firestore arrayUnion avoids duplicate watched entries for the same object.
        await updateDoc(ref, { movies: arrayUnion(movie) });
      } catch {
        await setDoc(ref, { movies: [movie] }, { merge: true });
      }
    }

    navigate(`/play/${movie.id}`);
  };

  return { playMovie };
}
