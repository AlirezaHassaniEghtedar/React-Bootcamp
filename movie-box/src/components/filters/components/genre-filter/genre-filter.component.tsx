import { type ReactNode, useContext } from "react";

import { FiltersContext } from "../../../../context/filters-context.ts";

import type { GenreType } from "../../../../types/genre.type.ts";
const genres: GenreType[] = [];

import styles from "./genre-filter.module.css";

export default function GenreFilterComponent(): ReactNode {
  const { filters, toggleGenre } = useContext(FiltersContext);

  return (
    <div className={styles["genre-filter"]}>
      <div className={styles.title}>برچسب</div>
      <div className={styles.options}>
        {genres.map((genre) => (
          <label key={genre.id}>
            <input
              name="genre-filter"
              type="checkbox"
              checked={!!filters.genres.find((x) => x.id === genre.id)}
              onChange={() => toggleGenre(genre)}
            />
            {genre.title}
          </label>
        ))}
      </div>
    </div>
  );
}
