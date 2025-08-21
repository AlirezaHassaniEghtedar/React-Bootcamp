import { type GenreType } from "./genre.type.ts";

export type MovieType = {
  id: number;
  title: string;
  genres: GenreType[];
};
