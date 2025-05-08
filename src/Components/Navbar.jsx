import React from 'react'
import { MdLightMode , MdDarkMode } from "react-icons/md";

export default function Navbar({ darkMode, toggleDarkMode }) {
    return (
        <div className='w-11/12 m-auto border-b-[2px]'>

      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SoftSell</h1>
        <button
          onClick={toggleDarkMode}
          className=" p-2 rounded"
          >
           {darkMode ? <MdLightMode size={45}/> : <MdDarkMode size={45}/>}
        </button>
      </header>
            </div>
            // <div className='w-full h-2'></div>
    );
  }
  