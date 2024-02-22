import { useState } from "react";
import { IoBagHandleOutline, IoSunnySharp, IoMoonSharp, IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [theme, setTheme] = useState(true);

  return (
    <nav className='fixed flex items-center justify-between w-full py-4  px-8 shadow-sm'>
      <div id='nav-logo' className='cursor-pointer'>
        <h3 className='text-xl font-bold'>SuppaShop</h3>
      </div>
      <div id='links' className='flex flex-row-reverse gap-4 sm:flex-row '>
        <ul className='hidden sm:flex gap-4 text-md'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Shop</li>
          <li className='cursor-pointer'>About</li>
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
          <li className='sm:hidden cursor-pointer'>
            <IoMenuSharp />
          </li>
        </ul>
      </div>
      {/* <div className='fixed inset-0 h-screen backdrop-blur'>
        <ul className='flex flex-col text-md bg-yellow-800 h-full w-3/4 items-center pt-[25%] justify-start ml-auto gap-11'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Shop</li>
          <li className='cursor-pointer'>About</li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
