import React from "react";
import Image from "next/image";
import TMDB from "@/public/tmdb-logo.svg";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="xl:ml-24 px-4 py-8 max-xl:mb-12 relative bottom-0 border-t border-gray-700">
      <div className="">
        <p className="text-gray-500/80">
          Data provided by{" "}
          <Link
            href="https://www.themoviedb.org/"
            target="_blank"
            className="inline-block relative top-1"
          >
            <Image
              src={TMDB}
              alt="TMDB Logo"
              width={0}
              height={0}
              className="w-[48px] h-auto"
            />
          </Link>
        </p>
      </div>
      <div>
        <p className="text-gray-500/80 mt-2">
          This project uses TMDB and the TMDB APIs but is not endorsed,
          certified, or otherwise approved by TMDB.
        </p>
      </div>

      <div className="text-gray-500/80 w-fit gap-4 mt-2 flex text-3xl">
        <div>
          <Link href="https://github.com/gabesone" target="_blank">
            {/* <GitHubIcon /> */}
            <IoLogoGithub className="hover:text-gray-300 transition duration-300" />
          </Link>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/gabrielgsena/"
            target="_blank"
          >
            {/* <LinkedInIcon /> */}
            <IoLogoLinkedin className="hover:text-gray-300 transition duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
