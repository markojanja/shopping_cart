import { useState, useContext, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import MobileNavbar from "./MobileNavbar";
import { IoBagHandleOutline, IoMenuSharp } from "react-icons/io5";
import { GiTomato } from "react-icons/gi";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const { cart } = useContext(CartContext);
  const totalItems = useMemo(() => cart.reduce((acc, curr) => acc + curr.qty, 0));

  const togggleMobileView = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <AnimatePresence>
        {mobileNav && <MobileNavbar key={"nav"} onClick={togggleMobileView} />}
        <nav className='fixed flex items-center justify-between w-full py-4  px-8 shadow-sm z-50 bg-slate-50 text-zinc-950'>
          <Link to='/'>
            <div id='nav-logo' className='cursor-pointer flex gap-1 items-center justify-center'>
              <span className='text-red-600 text-xl'>
                <GiTomato />
              </span>
              <h3 className='text-xl font-bold'>SuppaShop</h3>
            </div>
          </Link>
          <div id='links' className='flex flex-row-reverse gap-4 sm:flex-row '>
            <ul className='hidden sm:flex gap-4 text-md'>
              <li className='cursor-pointer font-semibold'>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className='cursor-pointer font-semibold'>
                <NavLink to='/shop'>Shop</NavLink>
              </li>
              <li className='cursor-pointer font-semibold'>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li className='cursor-pointer font-semibold text-zinc-950'>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
            <ul className='flex gap-4 items-center text-2xl'>
              <li className='relative cursor-pointer font-semibold'>
                <Link to='shop/cart'>
                  <IoBagHandleOutline />
                  {cart.length ? (
                    <div className='absolute flex items-center justify-center top-4 left-4 rounded-full bg-red-500 min-w-4 min-h-4 p-0.3'>
                      <span className='text-xs text-white'>{totalItems}</span>
                    </div>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
              <li className='sm:hidden cursor-pointer' onClick={togggleMobileView}>
                <IoMenuSharp />
              </li>
            </ul>
          </div>
        </nav>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
