import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
