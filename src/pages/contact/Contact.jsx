import email from "../../assets/Email.png";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

const Contact = () => {
  return (
    <main className='min-h-screen text-black flex items-center justify-center bg-red-400'>
      <div className='flex-col md:flex-row md:w-5/6 lg:w-4/6 flex bg-slate-50 pt-24 md:pt-0'>
        <div className='flex flex-col items-center justify-center gap-4 lg:w-1/2 flex-1'>
          <div className='w-5/6 mx-auto'>
            <h2 className='text-3xl text-red-500 font-extrabold'>Contact Us</h2>
            <p className='text-gray-600'>Get in touch and let us know how we can help</p>
          </div>
          <form action='' className='flex flex-col gap-3 w-5/6 mx-auto'>
            <input className='border border-gray-500 rounded-r-sm p-2' type='email' />
            <textarea className='border border-gray-500 rounded-sm p-2' name='' id='' cols='30' rows='10'></textarea>
            <button className=' w-[150px] bg-red-500 py-3 px-3 text-white font-semibold'>Send message</button>
          </form>
          <div className='flex flex-row w-5/6 items-start justify-start gap-3 p-3'>
            <IoLogoFacebook className='text-2xl text-red-500' />
            <IoLogoInstagram className='text-2xl text-red-500' />
            <IoLogoTwitter className='text-2xl text-red-500' />
          </div>
        </div>
        <div className='relative w-full lg:w-1/2 bg-red-200'>
          <img className='h-full w-full' src={email} alt='' loading='lazy' />
        </div>
      </div>
    </main>
  );
};

export default Contact;
