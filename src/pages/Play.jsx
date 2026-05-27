import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import { API_KEY } from "../constants/constants";

// Play page resolves the selected title to an embeddable YouTube trailer.
function Play() {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState("");

  useEffect(() => {
    if (!id) return;

    // Prefer an official trailer but fall back to the first available video.
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const trailer =
          response.data.results.find((item) => item.type === "Trailer") ||
          response.data.results[0];
        setVideoKey(trailer?.key || "");
      })
      .catch(() => setVideoKey(""));
  }, [id]);

  // Show a graceful unavailable state when TMDb has no playable video.
  return (
    <main className="min-h-screen bg-black pt-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        <Link to="/" className="mb-4 inline-block text-sm text-neutral-300 hover:text-white">
          Back
        </Link>
        {videoKey ? (
          <div className="aspect-video w-full overflow-hidden rounded bg-neutral-900">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              title="Movie trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center rounded bg-neutral-900 text-neutral-300">
            Trailer is not available for this title.
          </div>
        )}
      </div>
    </main>
  );
}

export default Play;
