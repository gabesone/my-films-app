import {
  PiFilmSlateLight,
  PiTelevisionSimpleLight,
  PiHouseLight,
} from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed shadow-sm h-12 w-full bottom-0 xl:min-h-screen xl:w-24 xl:left-0 bg-black z-50 border-gray-700 border-r">
      <div className="w-full h-12 flex justify-between items-center p-4 text-white xl:min-h-screen">
        <div className="flex flex-row items-center justify-around w-full xl:flex-col xl:justify-start xl:gap-16 xl:py-8 xl:min-h-screen text-4xl">
          {/* Home */}
          <Link href="/">
            <div className="cursor-pointer">
              <PiHouseLight />
            </div>
          </Link>
          {/* Movie */}
          <Link href="/movie">
            <div className="cursor-pointer">
              <PiFilmSlateLight />
            </div>
          </Link>
          {/* TV */}
          <Link href="/tv">
            <div className="cursor-pointer">
              <PiTelevisionSimpleLight />
            </div>
          </Link>
          {/* Search */}

          <div className="cursor-pointer">
            <CiSearch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
