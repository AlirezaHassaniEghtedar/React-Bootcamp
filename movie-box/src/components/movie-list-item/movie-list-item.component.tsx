import { type ReactNode } from "react";

import { Link } from "react-router";

import FluentEmojiFlatStar from "../../icons/FluentEmojiFlatStar.tsx";

import { type MovieType } from "../../types/movie.type.ts";

import styles from "./movie-list-item.module.css";

type Props = {
  movie: MovieType;
};

export default function MovieListItemComponent({ movie }: Props): ReactNode {
  return (
    <li className={styles["movie-list-item"]}>
      <div className={styles.visuals}>
        <img
          className={styles.thumbnail}
          src={`${import.meta.env.VITE_CDN_BASE_URL}/${""}`}
          alt=""
        />
      </div>
      <div className={styles.writings}>
        <Link to={`/movie/${movie.id}`} className={styles.title}>
          {movie.title}
        </Link>
        <div className={styles.ratings}>
          {""}
          <FluentEmojiFlatStar />
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: "" }}
        />
      </div>
      <ul className={styles.tags}>
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.title}</li>
        ))}
      </ul>
    </li>
  );
}
