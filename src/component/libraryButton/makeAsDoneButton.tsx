import { ExcerciseContext } from "@/context/excercise";
import { Idata } from "@/type/dataType";
import React, { useContext } from "react";

const MakeAsDoneButton = ({data}:{data:Idata}) => {
  const ExcerciseProvider = useContext(ExcerciseContext) as {
    todaysPlan: Idata[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<Idata[]>>;
  };
  const { todaysPlan, setTodaysPlan } = ExcerciseProvider;

  const handleMakeAsDoneButton = () => {
    setTodaysPlan(todaysPlan.filter((plan) => plan.id !== data.id));
    alert("removed");
  };
  return (
    <button
            onClick={handleMakeAsDoneButton}
          className="flex items-center gap-1.5 whitespace-nowrap cursor-pointer rounded-full bg-[#c6ff00] px-3 py-2 text-[10px] font-semibold text-black transition hover:bg-[#d7ff47]"
        >
          <span>✓</span>
          Mark as Done
        </button>
  )
};

export default MakeAsDoneButton;
