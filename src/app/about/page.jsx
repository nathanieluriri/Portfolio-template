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
              Do you like stories?
            </AccordionTrigger>
            <AccordionContent>
              I’ve got a good one. But long story short: I’ve been described as
              “a creative type with his feet on the ground” and believe all
              design abides by the same core principles. The only variable is
              the medium. Guided by the belief that design is worthless if it
              doesn’t function, I draw from my experiences across andriod app
              development, ios app development, website/web app developments,
              research skills, and my storytelling skills, to get to the root of
              why and for whom we’re truly designing for. And then I make stuff,
              really functional stuff.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-1.5 transition-all duration-200">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent>
              As a Product Designer, my background in Computer Science and
              Information Technology provides me with a unique perspective
              rooted in understanding human computer interaction behavior and
              learning. This allows me to approach design the way it should be
              approached. My journey in Product Design has been enriched by my
              ability to empathize with users and discover their needs and
              desires through supported research and my experience as a
              developerFF. I firmly believe that effective design transcends
              mere aesthetics; it must also enhance the user experience,
              ensuring that products are not only visually appealing but also
              functional and intuitive. Through diverse work experiences, I’ve
              cultivated a distinctive blend of wisdom and professionalism,
              setting me apart from my peers. My commitment lies in harnessing
              these qualities to make a significant impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-1.5 transition-all duration-200">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent>
              Yes, it's animated! But if you prefer something more static,
              that's totally fine too. While animation can really bring designs
              to life (and make developers break a sweat), tools like Rive,
              Jitter, and Spline have made it much easier to add that extra
              flair. But hey, I get it sometimes a clean, simple design is just
              what you need. After all, a user isn’t just the consumer, the user
              is the stakeholder too! And I will always make sure that the
              stakeholder's, employer's, contractor's opinion and taste will
              shine through my design choices
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export function AdditionalSkillDropDown() {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center justify-self-center ">
        <p className="transition-all duration-100 text-lg font-bold px-1.5">
          Additional Skills
        </p>

        <h1 className="transition-all duration-100 bg-green-100 text-black text-4xl font-medium me-2 px-1.5 py-1.5 rounded dark:bg-green-900 dark:text-white w-fit">
          Evolving to create impactful experiences
        </h1>
        <Accordion type="single" collapsible className="md:w-4/5 w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-1.5 transition-all duration-200">
              Do you like stories?
            </AccordionTrigger>
            <AccordionContent>
              I’ve got a good one. But long story short: I’ve been described as
              “a creative type with his feet on the ground” and believe all
              design abides by the same core principles. The only variable is
              the medium. Guided by the belief that design is worthless if it
              doesn’t function, I draw from my experiences across andriod app
              development, ios app development, website/web app developments,
              research skills, and my storytelling skills, to get to the root of
              why and for whom we’re truly designing for. And then I make stuff,
              really functional stuff.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-1.5 transition-all duration-200">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent>
              As a Product Designer, my background in Computer Science and
              Information Technology provides me with a unique perspective
              rooted in understanding human computer interaction behavior and
              learning. This allows me to approach design the way it should be
              approached. My journey in Product Design has been enriched by my
              ability to empathize with users and discover their needs and
              desires through supported research and my experience as a
              developerFF. I firmly believe that effective design transcends
              mere aesthetics; it must also enhance the user experience,
              ensuring that products are not only visually appealing but also
              functional and intuitive. Through diverse work experiences, I’ve
              cultivated a distinctive blend of wisdom and professionalism,
              setting me apart from my peers. My commitment lies in harnessing
              these qualities to make a significant impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-1.5 transition-all duration-200">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent>
              Yes, it's animated! But if you prefer something more static,
              that's totally fine too. While animation can really bring designs
              to life (and make developers break a sweat), tools like Rive,
              Jitter, and Spline have made it much easier to add that extra
              flair. But hey, I get it sometimes a clean, simple design is just
              what you need. After all, a user isn’t just the consumer, the user
              is the stakeholder too! And I will always make sure that the
              stakeholder's, employer's, contractor's opinion and taste will
              shine through my design choices
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
      <Padding />
      <Padding />
      <Padding />
      <Padding />
        <AboutMeSection />
    

      <div className="h-screen max-h-[1000px] flex items-center justify-center justify-self-center">
        <WhatCanIOfferSection />
      </div>

        <AditionalSkillsSection />
        <Padding />
      <Padding />
      <Padding />
      <Padding />
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

function AditionalSkillsSection() {
  return (
    <div className="max-w-[1000px] flex flex-col md:flex-row gap-10 w-4/5 justify-center justify-self-center transition-all duration-300">
      <AditionalSkillImage />
      <AdditionalSkillDropDown />
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

export function AditionalSkillImage() {
  const [isaditionalLoaded, setIsaditional] = useState(false);
  const [imageSrc, setImageSrc] = useState("/about_me_illustration.png");

  return (
    <>
      {!isaditionalLoaded && (
        <Skeleton className="w-full transition-all duration-1000 dark:bg-zinc-900 md:w-full rounded" />
      )}

      <Image
        src={imageSrc}
        alt="Aditional Skills Image"
        width={500}
        height={1500}
        className={`w-full transition-all duration-1000  sm:h-[350px] md:w-full rounded object-cover ${
          isaditionalLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsaditional(true)}
      />
    </>
  );
}
