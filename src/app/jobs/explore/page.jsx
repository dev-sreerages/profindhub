"use client";

import jobList from "@/data/db";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [jobsData, setJobsData] = useState([]);
  const [jobsFilteredData, setJobsFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setJobsData(jobList);
    setJobsFilteredData(jobList);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [jobsFilteredData.length]);
  function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  }

  const onSearch = (value) => {
    if (value === "") {
      setJobsFilteredData(jobsData);
    } else {
      setJobsFilteredData(
        jobsData.filter((job) => {
          return (
            job.title.toLowerCase().includes(value.toLowerCase()) ||
            job.company.toLowerCase().includes(value.toLowerCase()) ||
            job.location.toLowerCase().includes(value.toLowerCase()) ||
            job.experience.toLowerCase().includes(value.toLowerCase()) ||
            job.qualification.toLowerCase().includes(value.toLowerCase())
          );
        })
      );
    }
  };

  return (
    <div className="w-screen h-screen backdrop-blur-sm p-5 overflow-y-auto no-scrollbar">
      <div className="h-[190px] overflow-hidden">
        <div className="flex justify-between items-center pb-5">
          <Link href={"/"} legacyBehavior>
            <a className="text-zinc-500 hover:text-zinc-300 fade-in">
              <Icon icon="solar:arrow-left-line-duotone" className="w-7 h-7" />
            </a>
          </Link>
          <Link href={"/"} legacyBehavior>
            <a className="text-zinc-500 hover:text-zinc-300 fade-in">
              Support Creator
            </a>
          </Link>
        </div>
        <p className="text-zinc-300 font-semibold text-2xl fade-in mb-5">
          Explore Jobs
        </p>
        <input
          type="search"
          onChange={(e) => {
            onSearch(e.target.value);
          }}
          className="w-full rounded-xl h-12 mb-2 bg-[#050505]/50 border border-zinc-800 outline-none text-zinc-200 px-5 fade-in"
          placeholder="Search Jobs"
          name=""
          id=""
        />
        <p className="mb-5 text-zinc-500 text-[10px] fade-in">
          Searchable Content : Title, Role, Company Name, Location
        </p>
      </div>

      <div className="h-[calc(100vh-250px)] overflow-y-auto  no-scrollbar">
        {loading ? (
          <div className="fade-in w-full flex justify-center">
            <Icon
              icon="svg-spinners:3-dots-scale"
              className="text-zinc-500 h-14 w-14"
            />
          </div>
        ) : (
          <>
            {jobsFilteredData.length === 0 ? (
              <div className="fade-in w-full flex justify-center p-4 md:p-8 border border-zinc-800 bg-[#050505]/50 rounded-2xl fade-in">
                <p className="text-zinc-500">No Jobs Found</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 pb-10">
                {jobsFilteredData.map((job) => (
                  <Link href={"/projects/planetfall"}>
                    <article className="p-4 md:p-8 border border-zinc-800 bg-[#050505]/50 rounded-2xl fade-in">
                      <div class="flex justify-between gap-2 items-center">
                        <span class="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                          {job.date}
                        </span>
                        <span class="text-zinc-500 text-xs  flex items-center gap-1">
                          &#8377; {job.salary}
                        </span>
                      </div>
                      <h2 class="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display text-nowrap overflow-hidden text-ellipsis">
                        {job.title}
                      </h2>
                      <div className="mt-4">
                        <p className="text-xs duration-1000 text-zinc-500 group-hover:text-zinc-200">
                          Company / Organization
                        </p>
                        <p className="text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                          {job.company}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs duration-1000 text-zinc-500 group-hover:text-zinc-200">
                          Qualification
                        </p>
                        <p className="text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                          {job.qualification}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs duration-1000 text-zinc-500 group-hover:text-zinc-200">
                          Experience
                        </p>
                        <p className="text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                          {job.experience}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs duration-1000 text-zinc-500 group-hover:text-zinc-200">
                          Location
                        </p>
                        <p className="text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                          {job.location}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* {getSlicedString(
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores. ipisicing elit. Eaque, dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores. ",
              170
            )} */}
    </div>
  );
};

export default page;
