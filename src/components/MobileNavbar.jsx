import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const MobileNavbar = ({ onClick }) => {
  return (
    <div className='fixed inset-0 z-[9999]'>
      <div className='fixed inset-0 h-screen backdrop-blur -z-10' onClick={onClick}></div>
      <ul className='relative flex flex-col text-md bg-white border-gray-300 shadow-sm border-l-0 h-screen w-3/4 items-center pt-[25%] justify-start ml-auto gap-11'>
        <button className='absolute right-2 top-4 outline-none border-none cursor-pointer' onClick={onClick}>
          <IoCloseSharp className='text-xl' />
        </button>
        <li className='cursor-pointer'>
          <NavLink to='/' onClick={onClick}>
            Home
          </NavLink>
        </li>
        <li className='cursor-pointer'>
          <NavLink to='/shop' onClick={onClick}>
            Shop
          </NavLink>
        </li>
        <li className='cursor-pointer'>
          <NavLink to='/about' onClick={onClick}>
            About
          </NavLink>
        </li>
        <li className='cursor-pointer'>
          <NavLink to='/contact' onClick={onClick}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
