import React from "react";

const Sidebar = ({ data }) => {
  return (
    <aside className='w-[100%] sm:w-[23%] lg:w-[15%] border border-gray-300 shadow-sm items-stretch pt-24 px-5 self-stretch'>
      <h2>Categories</h2>
      <ul>
        {data.map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
