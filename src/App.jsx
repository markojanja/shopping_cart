import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";

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
