import { richFetch } from "../utils/fetch.utils.ts";

import { type GenreType } from "../types/genre.type.ts";

export async function fetchGenresApi(): Promise<GenreType[]> {
  const response = await richFetch(`/genre/movie/list`);

  const data = await response.json();

  return data.genres;
}
