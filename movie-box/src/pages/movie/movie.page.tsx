import { type ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router";

import { fetchMovieApi } from "../../api/fetch-movie.api.ts";

import styles from "./movie.module.css";

export default function MoviePage(): ReactNode {
  const { id } = useParams();

  const {
    data: movie,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieApi(id),
    staleTime: 60 * 1000,
  });

  if (isFetching) {
    return <>در حال بارگذاری ...</>;
  }

  if (isError) {
    return <>Error : {error ? error.message : "Unexpected Error."}</>;
  }

  if (!movie) {
    return <>There is no data.</>;
  }

  return <div className={styles.movie}>{movie?.title}</div>;
}
