
"use client"; 
import { Skeleton } from "@/components/ui/skeleton"



export default function Home() {
  return (
    <>
    {padding()}
      {heroSection()}
    </>
  );
}

function heroSection() {
  return <div className=" flex  lg:justify-center lg:gap-x-20 w-4/5 justify-self-center lg:items-center min-h-screen lg:flex-row flex-col gap-11 justify-start">
    <Skeleton className="w-full h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] rounded" />
    <div className="flex gap-y-3 flex-col justify-start">
      <Skeleton className="w-[200px] h-[50px] rounded" />
      <Skeleton className="w-full h-[200px] rounded" />
    </div>
  </div>;
}

function padding() {
  return <div className=" p-3 "></div>;
}

