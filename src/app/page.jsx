"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const navigate = useRouter();
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="max-w-[800px] mx-auto border border-white/10 backdrop-blur-sm p-16 px-24 sm:px-10 rounded-3xl">
        <ul className="flex justify-center gap-x-4">
          <li>
            <Link href={"#"} legacyBehavior>
              <a className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                Buy me a coffee
              </a>
            </Link>
          </li>
          <li>
            <Link href={"#"} legacyBehavior>
              <a className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                Support Creator
              </a>
            </Link>
          </li>
        </ul>
        <h1 class="mb-12 mt-12 z-10 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display text-8xl md:text-7xl sm:text-5xl whitespace-nowrap bg-clip-text font-bold">
          profindhub
        </h1>
        <div className="text-center flex justify-center">
          <button
            type="button"
            className="bg-[#FFFFFF] px-6 py-3 rounded-2xl text-[#050505] flex items-center gap-x-2"
            onClick={() => console.log("/jobs/explore")}>
            Explore Jobs{" "}
            <Icon icon="solar:arrow-right-line-duotone" className="h-5 w-5" />
          </button>
        </div>
        <div class="mt-10 text-center animate-fade-in">
          <h2 class="text-sm text-zinc-500 ">Find the right job for you</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
