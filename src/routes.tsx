import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shop from "./shop.tsx";
import ItemView from "./itemview.tsx";
import PaymentSuccess from "./paymentsuccess.tsx";
import NavBar from "./navbar.tsx";
import Footer from "./footer.tsx";
import Privacy from "./legal/privacy.tsx";
import Terms from "./legal/terms.tsx";
import FAQ from "./faq.tsx";

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
