


export default function Header({title}) {

  return (
    <header className=' p-4 flex justify-between items-center  text-gray-400 mb-2 text-xl z-10 px-4 dark'>
      <h3 className="text-3xl">{title} <span className="text-indigo-400">Charlie</span></h3>
    </header>
  );
}


