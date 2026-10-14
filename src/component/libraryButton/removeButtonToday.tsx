'use client'
import { ExcerciseContext } from '@/context/excercise';
import { Idata } from '@/type/dataType';
import React, { useContext } from 'react';
import { Flip, toast } from 'react-toastify';

const RemoveButtonToday = ({data}:{data:Idata}) => {

     const ExcerciseProvider = useContext(ExcerciseContext) as {
        todaysPlan: Idata[];
        setTodaysPlan: React.Dispatch<React.SetStateAction<Idata[]>>;
      };
      const { todaysPlan, setTodaysPlan } = ExcerciseProvider;
    
      const handleRemoveButton = () => {
        
            setTodaysPlan(todaysPlan.filter((plan)=>(plan.id!==data.id)));
            toast.success("Removed from today's plan", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
        
      }
      


    return (
        <button
            onClick={handleRemoveButton}
          aria-label="Remove workout"
          className="flex h-8 w-6 shrink-0 items-center cursor-pointer justify-center text-[#777985] transition hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
    );
};

export default RemoveButtonToday;