import { Link } from "react-router-dom";
const Sidebar = ({ data }) => {
  return (
    <aside className='w-[100%] sm:w-[23%] lg:w-[15%] border border-gray-300 shadow-sm items-stretch pt-24 px-5 self-stretch'>
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to='/shop'>All</Link>
        </li>
        {data.map((cat, idx) => (
          <li key={idx}>
            <Link to={`${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
