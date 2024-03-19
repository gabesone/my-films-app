import Image from "next/image";
import Test from "./components/test";

export default function Home() {
  return (
    <main className="xl:ml-24">
      <h2 className="">My Films</h2>
      <div>
        <Test />
      </div>
    </main>
  );
}

// lg:ml-[120px]
