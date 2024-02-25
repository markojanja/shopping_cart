import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='w-full grid grid-cols-1 sm:grid-cols-3 items-center content-center gap-3 bg-black text-white py-3'>
      <ul className='flex flex-col items-center justify-center'>
        <h3 className='text-gray-400 font-bold'>Links</h3>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
      </ul>

      <ul className='flex flex-col items-center justify-center'>
        <h3 className='text-gray-400 font-bold'>Links</h3>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
      </ul>
      <ul className='flex flex-col items-center justify-center'>
        <h3 className='text-gray-400 font-bold'>Links</h3>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
      </ul>
      <div className='w-full py-4 px-8 flex items-center justify-center sm:col-span-3'>
        <h3 className='text-lg'>
          Developed by:{" "}
          <a href='text-center'>
            MarkoJanja <IoLogoGithub className='inline text-2xl' />
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
