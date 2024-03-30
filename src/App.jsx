import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import { loader as catLoader } from "./pages/shop/Shop.jsx";
import { loader as productLoader } from "./pages/shop/components/Products.jsx";
import { loader as productsByCat } from "./pages/shop/components/ProductsByCat.jsx";
import Products from "./pages/shop/components/Products.jsx";
import ProductsByCat from "./pages/shop/components/ProductsByCat.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
          loader: catLoader,
          children: [
            {
              index: true,
              element: <Products />,
              loader: productLoader,
            },
            {
              path: ":name",
              element: <ProductsByCat />,
              loader: productsByCat,
            },
          ],
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
