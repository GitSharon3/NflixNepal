import { genresList } from "../constants/constants";

// Hook that maps TMDb genre IDs into display labels.
export default function useGenereConverter() {
  // Drop unknown IDs so UI callers only receive renderable genre names.
  const convertGenere = (genreIds = []) =>
    genreIds
      .map((id) => genresList.find((genre) => genre.id === id)?.name)
      .filter(Boolean);

  return { convertGenere };
}
