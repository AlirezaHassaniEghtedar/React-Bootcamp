import { richFetch } from "../utils/fetch.utils.ts";

import { type FiltersType } from "../types/filters.type.ts";
import { type MovieType } from "../types/movie.type.ts";

export async function fetchMoviesApi(
  filters: FiltersType,
): Promise<MovieType[]> {
  const response = await richFetch(generateUrl(filters));

  const data = await response.json();

  return data.results;
}

function generateUrl(filters: FiltersType): string {
  const params = generateParams(filters);
  return `/discover/movie?${params}`;
}

function generateParams(filters: FiltersType): string {
  const params = new URLSearchParams();

  params.set("with_keywords", filters.query);

  const combinedGenres = filters.genres.map((x) => x.id).join(",");
  params.set("with_genres", combinedGenres);

  return params.toString();
}
