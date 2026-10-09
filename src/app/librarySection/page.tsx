import ExcerciseDtailsCard from "@/component/excerciseDtailsCard";
import { Idata } from "@/type/dataType";

import React from "react";

const getDatas = async () => {
  try {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch {
    return [];
  }
};

const LibrarySection = async () => {
  const excerciseDatas = await getDatas();

  return (
    <>
      <div
        id="library"
        className="bg-[#0c0d0f] px-3 py-6 sm:px-5 sm:py-8 lg:px-7"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="mb-5 sm:mb-6">
            <h2 className="font-oswald text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
              THE LIBRARY
            </h2>

            <p className="mt-1 text-xs leading-relaxed text-[#9ca3af] sm:text-sm">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
              {excerciseDatas.map((data: Idata) => (
                <ExcerciseDtailsCard key={data.id} data={data} />
              ))}
            </div>
          
        </div>
      </div>
    </>
  );
};

export default LibrarySection;
