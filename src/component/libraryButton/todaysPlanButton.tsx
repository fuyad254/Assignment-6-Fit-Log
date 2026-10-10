"use client";
import { ExcerciseContext } from "@/context/excercise";
import { Idata } from "@/type/dataType";
import { CalendarPlus } from "lucide-react";
import React, { useContext } from "react";

const TodaysPlanButton = ({ data }: { data: Idata }) => {
  const ExcerciseProvider = useContext(ExcerciseContext) as {
    todaysPlan: Idata[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<Idata[]>>;
  };
  const { todaysPlan, setTodaysPlan } = ExcerciseProvider;

  const handleTodayButton = () => {
    const checkSave= todaysPlan.find((todaysPlanData=>todaysPlanData.id==data.id))
    if(checkSave){
        alert("alrady added")
    }
    else{
        setTodaysPlan([...todaysPlan, data]);
    }
  };


  console.log(todaysPlan.length);
  return (
    <div>
      <button
        type="button"
        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#c6ff00] px-4 py-3 text-xs font-semibold text-black transition-colors hover:bg-[#b7ed00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1014]"
        onClick={handleTodayButton}
      >
        <CalendarPlus size={14} strokeWidth={2} /> Add to today&apos;s plan
      </button>
    </div>
  );
};

export default TodaysPlanButton;
