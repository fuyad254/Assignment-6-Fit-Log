import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import { Idata } from "@/type/dataType";
import Link from "next/link";

const ExcerciseDtailsCard=({ data }: { data: Idata })=> {
  const {
    name,
    id,
    image,
    muscleGroups = [],
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = data;

  return (
      <Link href={`/librarySection/${id}`}>
      
    <article className="group min-w-0 overflow-hidden rounded-xl border border-[#25272e] bg-[#15161b] transition-colors duration-300 hover:border-[#3a3d45]">

      
      <div className="relative aspect-2/1 w-full overflow-hidden bg-[#202126]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      
      <div className="p-4">

        
        <div className="mb-3 flex flex-wrap gap-1.5">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[9px] font-extrabold uppercase leading-none text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        
        <h3 className="truncate font-oswald text-base font-semibold uppercase leading-snug text-white">
          {name}
        </h3>

        
        <p className="mt-1 truncate text-[11px] text-[#9296a1]">
          {equipment}
        </p>

        
        <div className="my-3 border-t border-[#24262d]" />

        
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] text-[#a0a4af]">
          <span className="inline-flex items-center gap-1">
            <Clock3 size={12} />
            {duration} min
          </span>

          <span className="inline-flex items-center gap-1">
            <Flame size={12} fill="currentColor" />
            {caloriesBurned} kcal
          </span>

          <span className="inline-flex items-center gap-1">
            <Star size={12} />
            {Number(rating).toFixed(1)}
          </span>
        </div>
      </div>
    </article>
    </Link>
  );
}

export default ExcerciseDtailsCard