import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { MoviePage } from "@/pages/MoviePage";
import { FavoritesPage } from "@/pages/FavoritesPage/FavoritesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    index: true
  },
  {
    path: "/:id",
    element: <MoviePage />
  },
  {
    path: "/favorites",
    element: <FavoritesPage />
  },
]);
