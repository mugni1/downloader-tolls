import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Youtube from "./pages/Youtube";
import TikTok from "./pages/Tiktok";
import Instagram from "./pages/Instagram";
import TwitterX from "./pages/TwitterX";
import DarkModeProvider from "./context/DarkMode";

const router = createBrowserRouter([
  { path: "*", element: <h1>404</h1> },
  { path: "/", element: <Home /> },
  { path: "/youtube", element: <Youtube /> },
  { path: "/tiktok", element: <TikTok /> },
  { path: "/instagram", element: <Instagram /> },
  { path: "/twitter-x", element: <TwitterX /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </StrictMode>
);
