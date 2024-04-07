import { useLoaderData, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Shop = () => {
  const data = useLoaderData();

  return (
    <main className='min-h-screen text-black flex flex-col sm:flex-row items-center justify-center'>
      <Sidebar data={data} />
      <section
        className={`relative pt-24 px-5 grid w-5/6 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5 self-stretch md:w-5/6 lg:w-4/6 mx-auto`}
      >
        <Outlet />
      </section>
    </main>
  );
};

export const loader = async () => {
  const resp = await fetch("https://fakestoreapi.com/products/categories");

  const cats = await resp.json();

  return cats;
};

export default Shop;
