import React from "react";

function Tooltip({ message, children }) {
  return (
    <div className='group relative flex'>
      {children}
      <span class='min-w-max transition-all duration-300 ease-in-out absolute right-px top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100'>
        {message}
      </span>
    </div>
  );
}

export default Tooltip;
