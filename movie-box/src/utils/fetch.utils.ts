export const richFetch = (query: string, init: RequestInit = {}) =>
  fetch(`${import.meta.env.VITE_API_BASE_URL}${query}`, {
    ...init,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      ...(init.headers || {}),
    },
  });
