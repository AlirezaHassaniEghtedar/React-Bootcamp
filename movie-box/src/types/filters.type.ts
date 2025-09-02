import { type GenreType } from "./genre.type.ts";

export type FiltersType = {
  query: string;
  genres: GenreType[];
};
