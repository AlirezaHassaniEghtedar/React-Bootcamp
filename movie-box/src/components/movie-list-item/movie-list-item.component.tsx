import { type ReactNode, useMemo } from "react";

import { Link } from "react-router";

import { type MovieListItemType } from "../../types/movie-list-item.type.ts";

import useGenresQuery from "../../queries/use-genres.query.ts";

import FluentEmojiFlatStar from "../../icons/FluentEmojiFlatStar.tsx";

import clsx from "clsx";

import styles from "./movie-list-item.module.css";

type Props = {
  movie: MovieListItemType;
};

export default function MovieListItemComponent({ movie }: Props): ReactNode {
  const { data: allGenres } = useGenresQuery();

  const movieGenres = useMemo(() => {
    if (!allGenres) {
      return [];
    }

    return allGenres.filter((x) => movie.genre_ids.includes(x.id));
  }, [allGenres, movie.genre_ids]);

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
        {movieGenres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </li>
  );
}
