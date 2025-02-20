import { Card, CardContent } from "@/components/ui/card";
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
import { Padding } from "../page";
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
export default function About() {
  return (
    <>
      <div className="flex lg:w-fit lg:max-w-[1000px]   justify-center justify-self-center flex-col">
        <h1 className="transition-all duration-100 bg-zinc-100 text-black text-xl font-medium me-2 px-1.5 py-1.5 rounded dark:bg-zinc-900 dark:text-white w-fit">
          WHAT I CAN OFFER
        </h1>
        <OfferCarousel />
      </div>
    </>
  );
}

export function OfferCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[300px] md:w-full md:max-w-fit p-3 overflow-x-hidden "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className=" md:basis-2/6 basis-[100%] w-[100px] md:w-full">
            <Card>
              <CardContent className="pr-4 flex items-start justify-start flex-col pt-2 min-h-[300px] gap-2 ">
                {icons[index]}
                <h1 className="text-xl md:text-3xl text-start">{titles[index]}</h1>
                <h1 className="md:max-w-[250px] max-w-[150px]  text-start text-sm">
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
