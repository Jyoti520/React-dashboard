import React from "react";


export default function Header({title}) {

  return (
    <header className='bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-700  p-2 border-b flex justify-between items-center border-gray-600 text-gray-400 mb-2 text-xl z-10 px-4 dark'>
      <h3 className="text-xl">{title}</h3>
      
    </header>
  );
}


