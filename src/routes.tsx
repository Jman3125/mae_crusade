import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shop from "./shop.tsx";
import NavBar from "./NavBar";

const routes = () => {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  };
  const BrowserRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Shop />,
        },
      ],
    },
  ]);

  return <RouterProvider router={BrowserRoutes} />;
};

export default routes;
