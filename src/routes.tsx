import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shop from "./shop";
import ItemView from "./itemview";
import PaymentSuccess from "./paymentsuccess";
import NavBar from "./navbar";
import Footer from "./footer";
import Privacy from "./legal/privacy";
import Terms from "./legal/terms";
import FAQ from "./faq";

const routes = () => {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
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
        {
          path: "/item/:id",
          element: <ItemView />,
        },
        {
          path: "/paymentsuccess",
          element: <PaymentSuccess />,
        },
        {
          path: "/privacy",
          element: <Privacy />,
        },
        {
          path: "/terms",
          element: <Terms />,
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
      ],
    },
  ]);

  return <RouterProvider router={BrowserRoutes} />;
};

export default routes;
