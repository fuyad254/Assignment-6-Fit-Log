"use client";
import { ExcerciseContext } from "@/context/excercise";
import { Idata } from "@/type/dataType";
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";

const SaveButton = ({ data }: { data: Idata }) => {
  const ExcerciseProvider = useContext(ExcerciseContext) as {
    save: Idata[];
    setSave: React.Dispatch<React.SetStateAction<Idata[]>>;
  };
  const { save, setSave } = ExcerciseProvider;

  const handleSaveButton = () => {
    const checkSave= save.find((saveData=>saveData.id==data.id))
    // console.log(hi);
    if(checkSave){
        alert("alrady added")
    }
    else{
        setSave([...save, data]);
    }

  };
  return (
    <div>
      <button
        type="button"
        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#343944] px-4 py-3 text-xs font-medium text-gray-200 transition-colors hover:bg-[#1b1e25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
        onClick={handleSaveButton}
      >
        <Bookmark size={14} strokeWidth={1.8} /> Save for later
      </button>
    </div>
  );
};

export default SaveButton;
