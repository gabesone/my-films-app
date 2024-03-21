import Image from "next/image";
import Test from "../components/test";
import Hero from "../components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="xl:ml-24">
      {/* Hero */}
      <div>
        <Hero />
      </div>

      <div className="min-h-screen px-4 mt-8 space-y-8">
        <div className="flex gap-2 items-baseline">
          <h2 className="text-white text-xl xl:text-2xl">Trending Movies</h2>
          <Link href={"/"}>
            <p className="text-sm text-sky-400 hover:text-sky-600 transition-colors duration-300">
              Explore All
            </p>
          </Link>
        </div>

        <div className="flex gap-2 items-baseline">
          <h2 className="text-white text-xl xl:text-2xl">Trending TV Shows</h2>
          <Link href={"/"}>
            <p className="text-sm text-sky-400 hover:text-sky-600 transition-colors duration-300">
              Explore All
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// lg:ml-[120px]
