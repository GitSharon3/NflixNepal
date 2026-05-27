import React from "react";
import UserMovieSection from "../components/movie/userMovieSection";

// My List page renders the reusable user collection view for saved titles.
function MyList() {
  return <UserMovieSection from="MyList"></UserMovieSection>;
}

export default MyList;
