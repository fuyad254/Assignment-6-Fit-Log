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

  const ExcerciseProvider = useContext(ExcerciseContext) as {
    todaysPlan: Idata[];
    save: Idata[];
  };
  const { todaysPlan,  save } = ExcerciseProvider;

  return (
    <div className="container mx-auto mt-10 mb-10 min-h-[60vh] px-4 sm:px-6 lg:px-8 ">
      

      <h1 className="text-3xl font-extrabold">MY PLAN</h1>

      <p className="mt-2 text-sm text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="mt-6">
        {activeTab === "today" ? (
          <div>
            
            <MyplanTodaytails todaysPlan={todaysPlan}/>
          </div>
        ) : (
          <div>
            
            <MyplandSaveDtails save={save}/>
          </div>
        )}
      </div>

      
      <div className="tabs tabs-box mt-7 w-full max-w-full overflow-x-auto rounded-xl border border-[#252832] bg-[#15171e] p-1 sm:w-fit">
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

      
      <div className="mt-6">
        {activeTab === "today" ? (
          <div>
            
            {todaysPlan.length > 0 ? (
              <div>
                {" "}
                {todaysPlan.map((data: Idata) => (
                  <WorkoutCard key={data.id} data={data} />
                ))}
              </div>
            ) : (
              <Emtycard />
            )}
          </div>
        ) : (
          <div>
            
            {save.length > 0 ? (
              <div>
                {" "}
                {save.map((data: Idata) => (
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
