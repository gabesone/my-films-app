import React from "react";
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="fixed shadow-sm h-12 w-full bottom-0 xl:min-h-screen xl:w-24 xl:left-0 bg-black z-50">
      <div className="w-full h-12 flex justify-between items-center p-4 text-white">
        <div className="flex flex-row items-center justify-around w-full">
          <GoHome className="text-4xl" />
          <h2>icon 2</h2>
          <h2>icon 3</h2>
          <h2>icon 4</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
