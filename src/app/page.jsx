"use client";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Padding />
      <TotalWorkSection />
      <Padding />
    </>
  );
}

export function TotalWorkSection() {
  return (
    <>
      <div className="transition-all duration-100 w-4/5 flex justify-self-center justify-center flex-col ">
        <h1 className=" transition-all duration-100 bg-zinc-100 text-black text-xl font-medium me-2 px-1.5 py-1.5 rounded dark:bg-zinc-900 dark:text-white w-fit">
          Featured projects
        </h1>
        <p className="transition-all duration-100 text-sm">
          Find out about my works: read through my case studies, have a look at
          final designs and try out prototypes I’ve built.
        </p>
      </div>
      <div className="w-4/5  flex flex-wrap gap-8 justify-center md:justify-between justify-self-center  ">
        <WorkSection />
        <WorkSection />
        <WorkSection />
        <WorkSection />
      </div>
    </>
  );
}

export function WorkSection() {
  return (
    <div className="w-2/5 min-w-[350px] mt-8 pr-2 pl-3">
      <div className="flex flex-col justify-center gap-6 p-4 dark:border-zinc-900 border-2 rounded-xl">
        <Skeleton className="w-full transition-all duration-1000 h-[200px] sm:h-[250px] md:w-full md:h-[250px] rounded dark:bg-zinc-900" />
        <Skeleton className=" w-3/5 transition-all duration-1000 lg:w-4/5 dark:bg-zinc-900 md:w-3/5  h-[50px] rounded" />{" "}
        <Skeleton className="w-full transition-all duration-1000 h-[250px] sm:h-[300px] md:w-full md:h-[300px] rounded dark:bg-zinc-900" />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <div className=" flex  transition-all duration-75 md:justify-center lg:gap-x-20 w-4/5 justify-self-center lg:items-center min-h-fit md:min-h-screen lg:flex-row flex-col gap-11 justify-start">
      <PortfolioImage/>

      <div className="flex gap-y-3 transition-all duration-75 flex-col justify-start">
        {/* <Skeleton className="w-[200px] transition-all duration-1000 lg:w-[500px] dark:bg-zinc-900 md:w-3/5  h-[50px] rounded" /> */}
        <h1 className="w-[200px]  lg:w-[500px] md:w-3/5  md:h-[50px] h-fit rounded text-5xl">Hi I'm Nathaniel</h1>
        {/* <Skeleton className="w-full transition-all duration-1000 dark:bg-zinc-900 md:w-4/5 h-[200px] rounded" /> */}
        <p className="w-full transition-all duration-75  md:w-4/5 md:h-[200px] h-fit rounded ">Turns out, my alma mater finally noticed my skills Thank God I was able walk away with both my first and last award In tech from University. If you're looking for a software engineer who blends innovation with excellence and a bit of comedy, you're in the right place. Again My Name Is Nathaniel Uriri And thanks for stoping by😋</p>
      </div>
    </div>
  );
}

export function Padding() {
  return <div className=" p-3 "></div>;
}



export function PortfolioImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <Skeleton className="w-full transition-all duration-1000 h-[250px] sm:h-[350px] md:w-full md:h-[500px] rounded dark:bg-zinc-900" />
      )}

      <Image
        src="/portfolio_pic_1.png"
        alt="Portfolio Image"
        width={500}
        height={500}
        className={`w-full transition-all duration-1000 h-[250px] sm:h-[350px] md:w-full md:h-[500px] rounded object-cover ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      </>
  );
}
