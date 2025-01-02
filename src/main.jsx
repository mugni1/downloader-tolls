import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Youtube from "./pages/Youtube";
import TikTok from "./pages/Tiktok";

const router = createBrowserRouter([
  { path: "*", element: <h1>404</h1> },
  { path: "/", element: <Home /> },
  { path: "/youtube", element: <Youtube /> },
  { path: "/tiktok", element: <TikTok /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
