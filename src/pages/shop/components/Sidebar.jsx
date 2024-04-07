import { NavLink, Link } from "react-router-dom";
const Sidebar = ({ data }) => {
  return (
    <aside className='w-[100%] sm:w-[23%] lg:w-[15%] border border-gray-300 shadow-sm items-stretch pt-24 px-5 self-stretch'>
      <h2 className='mb-4'>Categories</h2>
      <ul className='flex flex-col gap-3'>
        <li>
          <Link className='px-5 py-1 bg-red-500 font-bold text-white text-center rounded-lg' to='/shop'>
            All
          </Link>
        </li>
        {data.map((cat, idx) => (
          <li key={idx}>
            <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "") + " capitalize"} to={`${cat}`}>
              {cat}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
