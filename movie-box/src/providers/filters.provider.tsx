import { type PropsWithChildren, type ReactNode, useState } from "react";

import { FiltersContext } from "../context/filters-context.ts";

import { type GenreType } from "../types/genre.type.ts";
import { type FiltersType } from "../types/filters.type.ts";

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props): ReactNode {
  const [filters, setFilters] = useState<FiltersType>({ genres: [] });

  const toggleGenre = (genre: GenreType): void => {
    setFilters((old) => {
      const index = old.genres.findIndex((x) => x.id === genre.id);

      if (index === -1) {
        return { ...old, genres: [...old.genres, genre] };
      }

      const clone = [...old.genres];
      clone.splice(index, 1);
      return { ...old, tags: clone };
    });
  };

  return (
    <FiltersContext.Provider value={{ filters, toggleGenre }}>
      {children}
    </FiltersContext.Provider>
  );
}
