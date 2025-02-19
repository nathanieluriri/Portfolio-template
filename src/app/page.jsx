"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <>
      <Padding/>
      <HeroSection/>
      <Padding/>
      <div className="flex md:flex-wrap flex-col justify-center justify-self-center w-full h-full">
      <div className="flex flex-col w-1/4 h-2/3 outline-dotted"> </div>
      </div>
    </>
  );
}

export function HeroSection() {
  return (
    <div className=" flex  transition-all duration-1000 md:justify-center lg:gap-x-20 w-4/5 justify-self-center lg:items-center min-h-screen lg:flex-row flex-col gap-11 justify-start">
      <Skeleton className="w-full transition-all duration-1000 h-[250px] sm:h-[350px] md:w-full md:h-[500px] rounded dark:bg-zinc-900" />
      <div className="flex gap-y-3 transition-all duration-1000 flex-col justify-start">
        <Skeleton className="w-[200px] transition-all duration-1000 lg:w-[500px] dark:bg-zinc-900 md:w-3/5  h-[50px] rounded" />
        <Skeleton className="w-full transition-all duration-1000 dark:bg-zinc-900 md:w-4/5 h-[200px] rounded" />
      </div>
    </div>
  );
}

export function Padding() {
  return <div className=" p-3 "></div>;
}
