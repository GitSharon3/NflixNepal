import { genresList } from "../constants/constants";

export default function useGenereConverter() {
  const convertGenere = (genreIds = []) =>
    genreIds
      .map((id) => genresList.find((genre) => genre.id === id)?.name)
      .filter(Boolean);

  return { convertGenere };
}
