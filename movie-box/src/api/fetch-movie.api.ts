import { type MovieType } from "../types/movie.type.ts";

import { richFetch } from "../utils/fetch.utils.ts";

export async function fetchMovieApi(id?: string): Promise<MovieType> {
  const response = await richFetch(`/movie/${id}`);

  return await response.json();
}
