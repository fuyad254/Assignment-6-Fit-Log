"use client";

import Emtycard from "@/component/myplan/emtycard";
import MyplandSaveDtails from "@/component/myplan/myplanSaveDtails";
import MyplanTodaytails from "@/component/myplan/myplanTodaydtails";
import SaveCard from "@/component/myplan/saveCard";
import WorkoutCard from "@/component/myplan/workoutCard";
import { ExcerciseContext } from "@/context/excercise";
import { Idata } from "@/type/dataType";
import { useContext, useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );

  const ExcerciseProvider = useContext(ExcerciseContext) as {
    todaysPlan: Idata[];
    save: Idata[];
  };
  const { todaysPlan, save } = ExcerciseProvider;

  const sortExcercise = (datas: Idata[]) => {
    const sortedDatas = [...datas];
    if (sortBy === "Duration") {
      sortedDatas.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "Rating") {
      sortedDatas.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Calories") {
      sortedDatas.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    return sortedDatas;
  };

  const sortedTodaysPaln = sortExcercise(todaysPlan);
  const sortedSave = sortExcercise(save);

  return (
    <div className="container mx-auto mt-10 mb-10 min-h-[60vh] px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-3xl font-extrabold">MY PLAN</h1>
      <p className="mt-2 text-sm text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="mt-6">
        {activeTab === "today" ? (
          <div>
            <MyplanTodaytails todaysPlan={todaysPlan} />
          </div>
        ) : (
          <div>
            <MyplandSaveDtails save={save} />
          </div>
        )}
      </div>

      <div className="flex flex-row items-center justify-between  ">
        <div className="tabs tabs-box mt-7 w-fit max-w-full overflow-x-auto rounded-xl border border-[#252832] bg-[#15171e] p-1 sm:w-fit">
          <button
            onClick={() => setActiveTab("today")}
            className={`tab rounded-lg px-5 ${
              activeTab === "today"
                ? "bg-[#242731] font-semibold text-white"
                : "text-gray-400"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`tab rounded-lg px-5 ${
              activeTab === "saved"
                ? "bg-[#242731] font-semibold text-white"
                : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex flex-row items-center gap-5">
          <p className="text-slate-400 ">Sort By</p>

          <select
            onChange={(e) =>
              setSortBy(e.target.value as "Duration" | "Calories" | "Rating")
            }
            defaultValue="Duration"
            className="select w-auto appearance-none border border-gray-900 bg-[#13161D] "
          >
            <option value={"Duration"}>Duration</option>
            <option value={"Calories"}>Calories</option>
            <option value={"Rating"}>Rating</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "today" ? (
          <div>
            {sortedTodaysPaln.length > 0 ? (
              <div>
                {" "}
                {sortedTodaysPaln.map((data: Idata) => (
                  <WorkoutCard key={data.id} data={data} />
                ))}
              </div>
            ) : (
              <Emtycard />
            )}
          </div>
        ) : (
          <div>
            {sortedSave.length > 0 ? (
              <div>
                {" "}
                {sortedSave.map((data: Idata) => (
                  <SaveCard key={data.id} data={data} />
                ))}
              </div>
            ) : (
              <Emtycard />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
