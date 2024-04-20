import React from "react";

const Slide = ({ user }) => {
  return (
    <div className='flex flex-col  gap-3 p-7 bg-gray-200 rounded-lg shadow-lg min-h-[350px]'>
      <h3 className='text-gray-800 font-bold text-lg'>{user.name}</h3>
      <blockquote>
        <q className='text-gray-600 text-xl sm:text-2xl font-bold'>{user.feedback}</q>
      </blockquote>
    </div>
  );
};

export default Slide;
