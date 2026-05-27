import React from "react";
import UserMovieSection from "../components/movie/userMovieSection";

// Liked Movies page renders the reusable user collection view for liked titles.
function LikedMovies() {
  return <UserMovieSection from="LikedMovies"></UserMovieSection>;
}

export default LikedMovies;
