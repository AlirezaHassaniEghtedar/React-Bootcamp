import { richFetch } from "../utils/fetch.utils.ts";

import { type FiltersType } from "../types/filters.type.ts";
import { type MovieType } from "../types/movie.type.ts";

export async function fetchMoviesApi(
  filters: FiltersType,
): Promise<MovieType[]> {
  const params = new URLSearchParams();

  params.set("query", filters.query);

  filters.genres.forEach((genre) =>
    params.append("genre", genre.id.toString()),
  );

  const response = await richFetch(`/search/movie?${params.toString()}`);

  const data = await response.json();

  return data.results;
}
