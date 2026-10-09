import { Idata } from "@/type/dataType";
import { Bookmark, CalendarPlus } from "lucide-react";
import Image from "next/image";

const getDatas = async () => {
  try {
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog`);
    const data = await res.json();
    return data;
  } catch {
    return [];
  }
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const excerciseData = await getDatas();
  const data = excerciseData.find(
    (data: Idata) => String(data.id) === String(id),
  );

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = data;

  const specs = [
    { label: "Equipment", value: equipment },
    { label: "Difficulty", value: difficulty },
    { label: "Sets", value: sets },
    { label: "Reps", value: reps },
    { label: "Duration", value: `${duration} min` },
    { label: "Calories", value: `${caloriesBurned} kcal` },
    { label: "Rating", value: rating },
  ];

  return (
    <section className="min-h-screen bg-[#0e1014] px-4 py-8 text-white sm:px-6 lg:px-8">
      {" "}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-9">
        {" "}
        {/* Left Side: Workout Image */}{" "}
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl border border-white/5 sm:aspect-[4/4.8]">
          {" "}
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
          />{" "}
        </div>{" "}
        {/* Right Side: Workout Details */}{" "}
        <div className="min-w-0">
          {" "}
          {/* Title */}{" "}
          <h1 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
            {" "}
            {name}{" "}
          </h1>{" "}
          {/* Description */}{" "}
          <p className="mt-2 text-sm leading-6 text-gray-400">
            {" "}
            {description}{" "}
          </p>{" "}
          {/* Muscle Group Tags */}{" "}
          <div className="mt-3 flex flex-wrap gap-2">
            {" "}
            {muscleGroups.map((muscle:string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c6ff00] px-3 py-1 text-[11px] font-medium text-black"
              >
                {" "}
                {muscle}{" "}
              </span>
            ))}{" "}
          </div>{" "}
          {/* Key Specs */}{" "}
          <div className="mt-5 overflow-hidden rounded-xl border border-[#252933] bg-[#171a22]">
            {" "}
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex min-h-12 items-center justify-between gap-4 px-4 py-3 ${index !== specs.length - 1 ? "border-b border-[#252933]" : ""}`}
              >
                {" "}
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-[11px]">
                  {" "}
                  {spec.label}{" "}
                </span>{" "}
                <span className="text-right text-xs text-gray-100 sm:text-sm">
                  {" "}
                  {spec.value}{" "}
                </span>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          {/* Instructions */}{" "}
          <div className="mt-6">
            {" "}
            <h2 className="text-sm font-bold uppercase tracking-wide">
              {" "}
              Instructions{" "}
            </h2>{" "}
            <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-xs leading-5 text-gray-300 sm:text-sm">
              {" "}
              {instructions.map((instruction:string, index:number) => (
                <li key={`${index}-${instruction}`} className="pl-1">
                  {" "}
                  {instruction}{" "}
                </li>
              ))}{" "}
            </ol>{" "}
          </div>{" "}
          {/* Action Buttons */}{" "}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {" "}
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c6ff00] px-4 py-3 text-xs font-semibold text-black transition-colors hover:bg-[#b7ed00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1014]"
            >
              {" "}
              <CalendarPlus size={14} strokeWidth={2} /> Add to today&apos;s
              plan{" "}
            </button>{" "}
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#343944] px-4 py-3 text-xs font-medium text-gray-200 transition-colors hover:bg-[#1b1e25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            >
              {" "}
              <Bookmark size={14} strokeWidth={1.8} /> Save for later{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default page;
