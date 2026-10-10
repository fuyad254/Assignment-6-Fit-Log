import React from 'react';
import Link from "next/link";

const Emtycard = () => {
    return (
        <div className="w-full rounded-xl border border-dashed border-[#292b31] bg-[#101115] px-4 py-12 sm:px-6 sm:py-16">
      <div className="flex min-h-30 flex-col items-center justify-center text-center">
        <h2 className="text-base font-extrabold uppercase tracking-wide text-white sm:text-lg">
          NOTHING HERE YET
        </h2>

        <p className="mt-1 max-w-md text-xs leading-5 text-[#92939d] sm:text-sm">
          Browse the library and add a lift to get today moving.
        </p>

        <Link
          href={"/"}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-[#c6ff00] px-4.5 py-2 text-[11px] font-semibold text-black shadow-[0_4px_14px_rgba(198,255,0,0.12)] transition-all duration-200 hover:bg-[#d5ff45] hover:shadow-[0_4px_18px_rgba(198,255,0,0.22)] active:scale-95"
        >
          Go to workouts
        </Link>
      </div>
    </div>
    );
};

export default Emtycard;