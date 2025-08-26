import { type ReactNode } from "react";

import { Route, Routes } from "react-router";

import RootLayout from "./layouts/root-layout/root.layout.tsx";

import HomePage from "./pages/home/home.page.tsx";
import MoviePage from "./pages/movie/movie.page.tsx";
import AboutPage from "./pages/about/about.page.tsx";
import NotFoundPage from "./pages/not-found/not-found.page.tsx";

import QueryProvider from "./providers/query.provider.tsx";

import "./App.css";

function App(): ReactNode {
  return (
    <QueryProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="attraction/:id" element={<MoviePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </QueryProvider>
  );
}

export default App;
