import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Products from "./pages/shop/components/Products.jsx";
import Product, { loader as productLoader } from "./pages/shop/components/Product.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { loader as catLoader } from "./pages/shop/Shop.jsx";
import { loader as productsLoader } from "./pages/shop/components/Products.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
          errorElement: <ErrorPage />,
          loader: catLoader,
          children: [
            {
              index: true,
              element: <Products />,
              loader: productsLoader,
            },
            {
              path: ":name",
              element: <Products />,
              loader: productsLoader,
            },
          ],
        },
        {
          path: "/shop/products/:id",
          element: <Product />,
          loader: productLoader,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
