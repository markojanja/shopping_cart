import { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { IoBagHandleOutline, IoSunnySharp, IoMoonSharp, IoMenuSharp } from "react-icons/io5";
import { GiTomato } from "react-icons/gi";

const Navbar = () => {
  const [theme, setTheme] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);

  const togggleMobileView = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      {mobileNav && <MobileNavbar onClick={togggleMobileView} />}
      <nav className='fixed flex items-center justify-between w-full py-4  px-8 shadow-sm z-50 bg-slate-50'>
        <div id='nav-logo' className='cursor-pointer flex gap-1 items-center justify-center'>
          <span className='text-red-600 text-xl'>
            <GiTomato />
          </span>
          <h3 className='text-xl font-bold'>SuppaShop</h3>
        </div>
        <div id='links' className='flex flex-row-reverse gap-4 sm:flex-row '>
          <ul className='hidden sm:flex gap-4 text-md'>
            <li className='cursor-pointer'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to='/shop'>Shop</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
          <ul className='flex gap-4 items-center text-2xl'>
            <li className='relative cursor-pointer'>
              <IoBagHandleOutline />
              <div className='absolute flex items-center justify-center top-4 left-4 rounded-full bg-red-500 min-w-4 min-h-4 p-0.3'>
                <span className='text-xs text-white'>99</span>
              </div>
            </li>
            {theme ? (
              <li className='cursor-pointer'>
                <IoSunnySharp />
              </li>
            ) : (
              <li className='cursor-pointer'>
                <IoMoonSharp />
              </li>
            )}
            <li className='sm:hidden cursor-pointer' onClick={togggleMobileView}>
              <IoMenuSharp />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
