import heroImage from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-[#0c0d0f]   px-4 py-6 sm:px-6   lg:px-7  ">
      <div className="mx-auto  grid min-h-75 max-w-[1600px] grid-cols-1 items-center gap-8 overflow-hidden rounded-[14px] border border-[#25272e] bg-[#15161b] px-6 py-8 sm:px-8 md:grid-cols-[1.4fr_0.8fr] md:px-10 lg:min-h-87 lg:px-11 lg:py-10">
        
        <div className="order-1 flex flex-col items-start">
          <span className="mb-5 text-[10px] font-bold tracking-[0.12em] text-[#ccff00]">
            WORKOUT LIBRARY
          </span>

          <h1 className="max-w-162.5 font-oswald text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[50px]">
            Train with intent. Log every set.
          </h1>

          <p className="mt-4 max-w-110 text-sm leading-[1.6] text-[#999da8] sm:text-[13px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-[10px] font-extrabold tracking-wide text-black transition-colors hover:bg-[#b7e600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15161b]"
          >
            BROWSE WORKOUTS
          </Link>
        </div>

        
        <div className="order-2 flex min-h-55 items-center justify-center md:min-h-65">
          <Image
            src={heroImage}
            width={500}
            height={400}
            alt="Hero Image"
            className="w-auto h-auto"
            loading="eager"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
