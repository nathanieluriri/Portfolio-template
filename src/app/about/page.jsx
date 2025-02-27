"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Padding } from "@/components/padding";
import { useState, useEffect } from "react";
import {
  Speech,
  NotebookPen,
  Eclipse,
  AppWindow,
  Brain,
  MonitorSmartphone,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Padding } from "../page";

export function DropDownAbout() {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center justify-self-center ">
        <p className="transition-all duration-100 text-lg font-bold px-1.5">
          About Me
        </p>

        <h1 className="transition-all duration-100 bg-slate-100 text-black text-4xl font-medium me-2 px-1.5 py-1.5 rounded dark:bg-slate-900 dark:text-white w-fit">
          Evolving to create impactful experiences
        </h1>
        <Accordion type="single" collapsible className="md:w-4/5 w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-1.5 transition-all duration-200">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-1.5 transition-all duration-200">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent>
              As a Product Designer, my background in Psychology and Education
              provides me with a unique perspective rooted in understanding
              human behavior and learning. This allows me to approach design
              from a user’s viewpoint like no other. My journey in Product
              Design has been enriched by my ability to empathize with users and
              discover their needs and desires through supported research. I
              firmly believe that effective design transcends mere aesthetics;
              it must also enhance the user experience, ensuring that products
              are not only visually appealing but also functional and intuitive.
              Through diverse work experiences, I’ve cultivated a distinctive
              blend of wisdom and professionalism, setting me apart from my
              peers. My commitment lies in harnessing these qualities to make a
              significant impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-1.5 transition-all duration-200">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default function About() {
  return (
    <>
      <AboutMeSection />
      <Padding/>
      <Padding/>
      <WhatCanIOfferSection />
      <Padding/>
      
    </>
  );
}

function AboutMeSection() {
  return (
    <div className="max-w-[1000px] flex flex-col md:flex-row gap-10 w-4/5 justify-center justify-self-center transition-all duration-300">
      <AboutMeImage />
      <DropDownAbout />
      
    </div>
  );
}

function WhatCanIOfferSection() {
  return (
    <div className="flex lg:w-fit lg:max-w-[1000px]   justify-center justify-self-center flex-col">
      <Padding />

      <h1 className="ml-7 sm:m-0 transition-all duration-100 bg-red-50 text-black text-xl font-medium me-2 px-1.5 py-1.5 rounded dark:bg-red-950 dark:text-white w-fit">
        WHAT I CAN OFFER
      </h1>
      <OfferCarousel />
      <Padding />
    </div>
  );
}

export function OfferCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[250px] md:w-full md:max-w-fit p-3"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className=" md:basis-2/6 basis-[100%] w-[100px] md:w-full"
          >
            <Card>
              <CardContent className="pr-4 flex items-center justify-center sm:items-start sm:justify-start flex-col pt-2 min-h-[300px] gap-2 ">
                {icons[index]}
                <h1 className="text-xl md:text-3xl text-center sm:text-start">
                  {titles[index]}
                </h1>
                <h1 className="md:max-w-[250px] max-w-[150px]  sm:text-start text-center text-sm">
                  {contents}
                </h1>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const icons = [
  <Speech className=" w-[60px] h-[60px]" />,
  <NotebookPen className=" w-[60px] h-[60px]" />,
  <Eclipse className=" w-[60px] h-[60px]" />,
  <AppWindow className=" w-[60px] h-[60px]" />,
  <Brain className=" w-[60px] h-[60px]" />,
  <MonitorSmartphone className=" w-[60px] h-[60px]" />,
];
const titles = [
  "Communication & Collaboration",
  "User Research",
  "Visual Design",
  "Developer Friendly",
  "AI Centered Applications",
  "Mobile & Web Apps",
];
const contents =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.";

export function AboutMeImage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("/portfolio_pic_1.png");

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageSrc("/portfolio_pic_2.png");
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded && (
        <Skeleton className="w-full transition-all duration-1000 dark:bg-zinc-900 md:w-full rounded" />
      )}

      <Image
        src={imageSrc}
        alt="Portfolio Image"
        width={500}
        height={1500}
        className={`w-full transition-all duration-1000  sm:h-[350px] md:w-full rounded object-cover ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
}
