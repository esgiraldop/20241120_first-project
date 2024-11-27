import { createBrowserRouter } from "react-router";
import { Layout } from "../components/layout";
import { Home } from "../pages/home.page";
import { Login } from "../pages/login.page";
import { AboutUs } from "../pages/aboutUs.page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/aboutus",
        Component: AboutUs,
      },
    ],
  },
]);
