import { type ReactNode } from "react";

import FiltersProvider from "../../providers/filters.provider.tsx";

import FiltersComponent from "../../components/filters/filters.component.tsx";
import MovieListComponent from "../../components/movie-list/movie-list.component.tsx";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <FiltersProvider>
      <div className={styles["home"]}>
        <FiltersComponent />
        <MovieListComponent />
      </div>
    </FiltersProvider>
  );
}
