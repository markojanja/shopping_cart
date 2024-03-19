import men from "../../assets/women.png";
import pendant from "../../assets/pendant.png";
import laptop from "../../assets/laptop.png";

const About = () => {
  return (
    <div className='min-h-screen text-black flex flex-col justify-center gap-16 py-24 bg-slate-50'>
      <main className='flex flex-col justify-center w-5/6 mx-auto gap-8 bg-gray-200 rounded-lg p-4 md:p-10 min-h-96'>
        <h1 className='text-2xl md:text-3xl lg:5xl font-bold'>Your Ultimate Shopping Destination</h1>
        <p className='md:text-lg'>
          Welcome to SuppaShop, where fashion, style, and technology converge to redefine your shopping experience.
          We're more than just an online store; we're a destination for trendsetters, tech enthusiasts, and everyone in
          between. Our commitment is to provide you with a seamless shopping journey, offering an unparalleled selection
          of men's and women's clothing, stunning jewelry pieces, and cutting-edge electronics.
        </p>
      </main>
      <section className='grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto gap-4'>
        <div className='flex flex-col justify-center gap-7 px-4 col-span-2'>
          <h2 className='text-xl md:text-3xl lg:5xl font-bold'>Our Passion for Fashion</h2>
          <p className='md:text-lg'>
            Step into our virtual aisles and discover a world of sartorial splendor. Whether you're on the hunt for
            classic staples or the latest runway trends, we've curated a diverse collection of men's and women's
            clothing to cater to every style preference. From sophisticated suits to casual chic ensembles, our
            inventory boasts premium quality garments that blend comfort, style, and affordability.
          </p>
        </div>
        <div className='bg-red-500 '>
          <img className='h-96 w-full object-cover' src={men} alt='' />
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto gap-4'>
        <div className='flex flex-col justify-center gap-7 px-4 col-span-2'>
          <h2 className='text-xl md:text-3xl lg:5xl font-bold'>Sparkle and Shine with Our Jewelry Collection</h2>
          <p className='md:text-lg'>
            Elevate your look with our exquisite range of jewelry pieces designed to captivate and enchant. From
            delicate necklaces to statement earrings, each piece in our collection is meticulously crafted to add a
            touch of elegance and sophistication to any ensemble. Whether you're treating yourself or searching for the
            perfect gift, our curated selection of jewelry is sure to dazzle and delight.
          </p>
        </div>
        <div className='bg-red-500 md:order-first '>
          <img className='h-96 w-full object-cover' src={pendant} alt='' />
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto gap-4'>
        <div className='flex flex-col justify-center gap-7 px-4 col-span-2'>
          <h2 className='text-xl md:text-3xl lg:5xl font-bold'>Tech Savvy and Beyond</h2>
          <p className='md:text-lg'>
            In a world driven by innovation, we understand the importance of staying ahead of the curve. That's why we
            offer a comprehensive range of cutting-edge electronics to cater to your tech needs. Whether you're a gadget
            guru or simply searching for the latest must-have device, our diverse selection of electronics ensures that
            you'll always stay connected, entertained, and empowered.
          </p>
        </div>
        <div className='bg-red-500'>
          <img className='h-96 w-full object-cover' src={laptop} alt='' />
        </div>
      </section>
    </div>
  );
};

export default About;
