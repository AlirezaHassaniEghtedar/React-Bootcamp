import { createContext } from "react";

import { type FiltersType } from "../types/filters.type.ts";
import { type GenreType } from "../types/genre.type.ts";

type FiltersContextValue = {
  filters: FiltersType;
  toggleGenre: (genre: GenreType) => void;
};

export const FiltersContext = createContext<FiltersContextValue>({
  filters: {
    genres: [],
  },
  toggleGenre: () => {},
});
