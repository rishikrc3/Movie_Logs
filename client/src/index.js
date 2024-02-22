import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import About from "./Routes/About";
import RouteCard from "./Routes/RouteCard";
import WatchedMovies from "./Routes/WatchedMovies";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movies/:imdbID",
        element: <RouteCard />,
      },
      {
        path: "/watchedMovies",
        element: <WatchedMovies />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
