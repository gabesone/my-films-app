import Image from "next/image";
import Test from "./components/test";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="xl:ml-24">
      {/* Hero */}
      <div className="">
        <Hero />
      </div>
      <h2 className="">My Films</h2>
      <div>
        <Test />
      </div>
      <div className=" flex">
        <div className=" bg-gradient-to-r from-black via-current to-transparent w-24">
          a
        </div>
        <div className="relative -left-4">b</div>
      </div>
    </main>
  );
}

// lg:ml-[120px]
