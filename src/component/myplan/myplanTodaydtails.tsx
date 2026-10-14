import { Idata } from "@/type/dataType";
import React from "react";

const MyplanTodaytails = ({ todaysPlan }: { todaysPlan: Idata[] }) => {
  const todaysDurations: number[] = todaysPlan.map(
    (todayPlan: Idata) => todayPlan.duration,
  );
  let duration: number= 0;
  for(const num of todaysDurations){
    duration+=num
  }

  const todayscalories: number[] = todaysPlan.map(
    (todayPlan: Idata) => todayPlan.caloriesBurned,
  );
  let calories: number= 0;
  for(const num of todayscalories){
    calories+=num
  }


  return (
    <div>
      <section className="mt-6 mb-10 grid grid-cols-1 gap-4 rounded-2xl border border-[#252832] bg-[#13151c] p-5 sm:grid-cols-3">
        <div className="border-b border-[#252832] pb-4 sm:border-b-0 sm:border-r sm:pb-0">
          <p className="text-xs text-gray-400">Exercises</p>
          <h2 className="mt-1 text-4xl font-extrabold text-[#c6ff00]">
            {todaysPlan.length}
          </h2>
        </div>

        <div className="border-b border-[#252832] pb-4 sm:border-b-0 sm:border-r sm:pl-5 sm:pb-0">
          <p className="text-xs text-gray-400">Minutes</p>
          <h2 className="mt-1 text-4xl font-extrabold">{duration}</h2>
        </div>

        <div className="sm:pl-5">
          <p className="text-xs text-gray-400">Calories</p>
          <h2 className="mt-1 text-4xl font-extrabold">{calories}</h2>
        </div>
      </section>
    </div>
  );
};

export default MyplanTodaytails;
