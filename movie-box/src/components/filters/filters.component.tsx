import { type ReactNode } from "react";

import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

import GenreFilterComponent from "./components/genre-filter/genre-filter.component.tsx";

import styles from "./filters.module.css";

export default function FiltersComponent(): ReactNode {
  return (
    <div className={styles["filters"]}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GenreFilterComponent />
      </ErrorBoundary>
    </div>
  );
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>خطای غیر منتظره</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>تلاش مجدد</button>
    </div>
  );
}
