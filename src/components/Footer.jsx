import { IoLogoGithub, IoMailSharp, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 sm:grid-cols-3 items-center content-center gap-3 bg-black text-white py-3'>
      <ul className='flex flex-col items-center justify-start h-full'>
        <h3 className='text-gray-400 font-bold uppercase'>Links</h3>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>

      <ul className='flex flex-col items-center justify-start h-full'>
        <h3 className='text-gray-400 font-bold uppercase'>Information</h3>
        <li>
          <Link to={"/shop/cart"}>Cart</Link>
        </li>
        <li>Account</li>
        <li>FAQ's</li>
        <li>Blog</li>
      </ul>
      <div className='flex flex-col items-center justify-start h-full gap-1 px-1'>
        <h3 className='text-gray-400 font-bold uppercase'>newsletter</h3>
        <form className='bg-white flex items-center justify-center' action=''>
          <input type='email' className='outline-none border-none text-black w-full p-1' />
          <button type='submit' className='bg-red-500 h-full border-none outline-none p-1'>
            <IoMailSharp className='text-2xl' color='white' />
          </button>
        </form>
        <h3 className='uppercase text-gray-400'>follow us:</h3>
        <div className='flex gap-3'>
          <IoLogoFacebook className='text-xl' color='white' />
          <IoLogoInstagram className='text-xl' color='white' />
          <FaSquareXTwitter className='text-xl' color='white' />
        </div>
      </div>
      <div className='w-full py-4 px-8 flex items-center justify-center sm:col-span-3'>
        <h3 className='text-lg'>
          Developed by:{" "}
          <a className='text-center'>
            MarkoJanja <IoLogoGithub className='inline text-2xl' />
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
