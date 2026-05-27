import { useContext, useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";
import { PopUpContext } from "../../context/moviePopUpContext";
import usePlayMovie from "../../hooks/usePlay";
import useUpdateLikedMovies from "../../hooks/useUpdateLikedMovies";
import useUpdateMylist from "../../hooks/useUpdateList";
import MoviePopUp from "./moviePopUp";

// RowPost renders a horizontal movie shelf from either fetched or provided data.
function RowPost({ title, url, movieData, islarge = false, first = false }) {
  const { showModal, setShowModal } = useContext(PopUpContext);
  const { playMovie } = usePlayMovie();
  const { addToMyList } = useUpdateMylist();
  const { addToLikedMovies } = useUpdateLikedMovies();
  const [movies, setMovies] = useState(movieData || []);
  const [moviePopupInfo, setMoviePopupInfo] = useState({});

  useEffect(() => {
    // Prefer caller-provided movies for personalized rows.
    if (movieData) {
      setMovies(movieData);
      return;
    }

    if (!url) return;
    // Fetch TMDb category rows through the configured axios client.
    axios.get(url).then((response) => {
      setMovies(response.data.results || []);
    });
  }, [movieData, url]);

  // Share selected movie details with the global modal.
  const handleMoviePopup = (movie) => {
    setMoviePopupInfo(movie);
    setShowModal(true);
  };

  // The first row overlaps the banner to match the Netflix-style layout.
  return (
    <section className={`${first ? "-mt-44 relative z-10" : "mt-8"} px-2`}>
      <h2 className="mb-3 text-xl font-semibold text-white md:text-2xl">{title}</h2>
      <div className="flex gap-3 overflow-x-auto pb-5">
        {movies.map((movie) => {
          // Large rows use posters; standard rows prefer landscape imagery.
          const imagePath = islarge ? movie.poster_path : movie.backdrop_path || movie.poster_path;
          if (!imagePath) return null;

          return (
            <article
              key={`${title}-${movie.id}`}
              className={`group relative shrink-0 overflow-hidden rounded-sm bg-neutral-900 transition hover:scale-105 ${
                islarge ? "w-44 md:w-56" : "w-64 md:w-80"
              }`}
            >
              <img
                className={`w-full object-cover ${islarge ? "h-64 md:h-80" : "h-36 md:h-44"}`}
                src={`${imageUrl}${imagePath}`}
                alt={movie.title || movie.name || "Movie poster"}
                onClick={() => handleMoviePopup(movie)}
              />
              <div className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black via-black/70 to-transparent p-3 group-hover:block">
                <h3 className="line-clamp-1 text-sm font-semibold text-white">
                  {movie.title || movie.name}
                </h3>
                {movie.vote_average ? (
                  <StarRatings
                    rating={movie.vote_average / 2}
                    starRatedColor="red"
                    numberOfStars={5}
                    name={`${movie.id}-rating`}
                    starDimension="0.9rem"
                    starSpacing="0.1rem"
                  />
                ) : null}
                <div className="mt-2 flex gap-2">
                  <button
                    className="rounded-full border border-white/80 p-1 text-white hover:border-red-600 hover:text-red-600"
                    onClick={() => playMovie(movie)}
                    aria-label={`Play ${movie.title || movie.name}`}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <button
                    className="rounded-full border border-white/80 p-1 text-white hover:border-red-600 hover:text-red-600"
                    onClick={() => addToLikedMovies(movie)}
                    aria-label={`Like ${movie.title || movie.name}`}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 21h4V9H2v12zm20-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L13.17 1 6.59 7.59C6.22 7.95 6 8.45 6 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                    </svg>
                  </button>
                  <button
                    className="rounded-full border border-white/80 p-1 text-white hover:border-red-600 hover:text-red-600"
                    onClick={() => addToMyList(movie)}
                    aria-label={`Add ${movie.title || movie.name} to my list`}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {showModal ? <MoviePopUp data1={moviePopupInfo} /> : null}
    </section>
  );
}

export default RowPost;
