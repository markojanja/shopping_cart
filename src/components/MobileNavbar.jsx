import { IoCloseSharp } from "react-icons/io5";

const MobileNavbar = ({ onClick }) => {
  return (
    <div className='fixed inset-0 z-50'>
      <div className='fixed inset-0 h-screen backdrop-blur -z-10' onClick={onClick}></div>
      <ul className='relative flex flex-col text-md bg-white border-gray-300 shadow-sm border-l-0 h-screen w-3/4 items-center pt-[25%] justify-start ml-auto gap-11'>
        <button className='absolute right-2 top-4 outline-none border-none cursor-pointer' onClick={onClick}>
          <IoCloseSharp className='text-xl' />
        </button>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Shop</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
