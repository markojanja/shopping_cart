import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { TbFidgetSpinner } from "react-icons/tb";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div className='bg-slate-50'>
      <ScrollToTop />
      <Navbar />
      {navigation.state === "loading" ? (
        <div className='loading flex text-black min-h-screen pt-24 items-center justify-center'>
          <TbFidgetSpinner className='loading-icon text-red-500 text-8xl' />
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
};

export default Layout;
