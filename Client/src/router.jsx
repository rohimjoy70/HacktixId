import { createBrowserRouter, redirect } from "react-router-dom";

import RegisterPage from "./pages/register";
import LoginPage from "./pages/Login";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/Watchlist";

const auth = () => {
  if (!localStorage.getItem("access_token")) {
    return redirect("/login");
  }
  return null;
};

const hasLogin = () => {
  if (localStorage.getItem("access_token")) {
    return redirect("/");
  }
  return null;
};

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    loader: auth,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/watchlist",
        element: <WatchlistPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: hasLogin,
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: hasLogin,
  },
]);

export default router;
