import Image from "next/image";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Idata } from "@/type/dataType";
import Link from "next/link";

const WorkoutCard = ({data}:{data:Idata}) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-[#252630] bg-[#15161c] p-5 sm:flex-row sm:items-center sm:gap-3">
      {/* Thumbnail */}
      <Image
        src={data.image}
        alt={"hi"}
        width={70}
        height={50}
        className="h-24 w-full shrink-0 rounded-lg object-cover sm:h-14.5 sm:w-29"
      />

      {/* Workout Info */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-xs font-extrabold uppercase text-white sm:text-[16px]">
          {data.name}
        </h3>

        <p className="mt-1 text-[11px] text-[#92939d]">equipment</p>

        {/* Stats */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-[#c0c1c9]">
          <span className="flex items-center gap-1">
            <span className="text-[#c6ff00]">
              <IoMdTime />
            </span>
            {data.duration} min
          </span>

          <span className="flex items-center gap-1">
            <span className="text-[#c6ff00]">
              <FaFire />
            </span>
            {data.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <span className="text-[#c6ff00]">
              <FaRegStar />
            </span>
            {(data.rating).toFixed(1)}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex shrink-0 items-center gap-2 sm:ml-auto">
        <Link href={`/librarySection/${data.id}`}>
        <button
          //   onClick={onViewDetails}
          className="whitespace-nowrap rounded-full border border-[#343640] px-3 py-2 text-[10px] text-white transition hover:border-[#c6ff00]"
        >
          View Details
        </button>
        </Link>

        <button
          //   onClick={onMarkDone}
          className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#c6ff00] px-3 py-2 text-[10px] font-semibold text-black transition hover:bg-[#d7ff47]"
        >
          <span>✓</span>
          Mark as Done
        </button>

        <button
          //   onClick={onRemove}
          aria-label="Remove workout"
          className="flex h-8 w-6 shrink-0 items-center justify-center text-[#777985] transition hover:text-white"
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
      </div>
    </div>
  );
};

export default WorkoutCard;
