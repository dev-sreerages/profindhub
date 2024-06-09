"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="max-w-[800px] mx-auto border border-white/10 backdrop-blur-sm p-16 px-24 sm:px-10 rounded-3xl fade-in">
        <ul className="flex justify-center gap-x-4">
          <li>
            <Link
              href={"https://www.buymeacoffee.com/sreerages"}
              legacyBehavior>
              <a
                target="_blank"
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 fade-in">
                Buy me a coffee
              </a>
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.buymeacoffee.com/sreerages"}
              legacyBehavior>
              <a className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 fade-in">
                Support Creator
              </a>
            </Link>
          </li>
        </ul>
        <h1 class="fade-in mb-12 mt-12 z-10 text-transparent duration-1000 bg-zinc-300 cursor-default text-edge-outline animate-title font-display text-8xl md:text-7xl sm:text-5xl whitespace-nowrap bg-clip-text font-bold">
          profindhub
        </h1>
        <div className="text-center flex justify-center fade-in">
          <button
            type="button"
            className="bg-zinc-300 px-6 py-3 rounded-2xl text-[#050505] flex items-center gap-x-2"
            onClick={() => router.push("/jobs/explore")}>
            Explore Jobs{" "}
            <Icon icon="solar:arrow-right-line-duotone" className="h-5 w-5" />
          </button>
        </div>
        <div class="mt-10 text-center fade-in">
          <h2 class="text-sm text-zinc-500 ">Find the right job for you</h2>
        </div>

        <div class="mt-5 text-center fade-in">
          <h2 class="text-sm text-zinc-500 ">Follow me</h2>
          <div className="mt-3 flex justify-center gap-x-4">
            <a
              href="https://www.instagram.com/dev.kl51?igsh=MWFlazZhbHZ3bXVnaw=="
              target="_blank">
              <Icon
                icon="teenyicons:instagram-solid"
                className="h-8 w-8 text-zinc-500 "
              />
            </a>
            <a href="#">
              <Icon
                icon="fa:youtube-square"
                className="h-8 w-8 text-zinc-500 "
              />
            </a>
            <a href="#">
              <Icon
                icon="fa:facebook-square"
                className="h-8 w-8 text-zinc-500 "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
