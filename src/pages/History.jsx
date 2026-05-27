import React from "react";
import UserMovieSection from "../components/movie/userMovieSection";

// History page renders the reusable user collection view for watched titles.
function History() {
  return <UserMovieSection from="WatchedMovies"></UserMovieSection>;
}

export default History;
