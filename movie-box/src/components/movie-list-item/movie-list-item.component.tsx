import { type ReactNode } from "react";

import { Link } from "react-router";

import FluentEmojiFlatStar from "../../icons/FluentEmojiFlatStar.tsx";

import type { MovieListItemType } from "../../types/movie-list-item.type.ts";

import styles from "./movie-list-item.module.css";
import clsx from "clsx";

type Props = {
  movie: MovieListItemType;
};

export default function MovieListItemComponent({ movie }: Props): ReactNode {
  return (
    <li className={styles["movie-list-item"]}>
      <div className={styles.visuals}>
        <img className={clsx(styles.poster)} src={""} alt="" />
      </div>
      <div className={styles.writings}>
        <Link
          to={`/movie/${movie.id}`}
          className={styles.title}
          title={movie.title}
        >
          {movie.title}
        </Link>
        <div className={styles.ratings}>
          {movie.vote_average.toLocaleString("default", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            roundingMode: "floor",
          })}
          <FluentEmojiFlatStar />
        </div>
        <div className={styles.overview}>{movie.overview}</div>
      </div>
      <ul className={styles.tags}>
        {movie.genre_ids.map((genreId) => (
          <li key={genreId}>{genreId}</li>
        ))}
      </ul>
    </li>
  );
}
