import AboutSection from "./components/AboutSection";
import Banner from "./components/Banner";
import CategoriesSection from "./components/CategoriesSection";
import PromoSection from "./components/PromoSection";
import TestimonialsSection from "./components/TestimonialsSection";

const Main = () => {
  return (
    <div className='bg-slate-50'>
      <Banner />
      <CategoriesSection />
      <AboutSection />
      <PromoSection />
      <TestimonialsSection />
    </div>
  );
};

export default Main;
