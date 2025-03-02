const Project1 = JSON.parse(process.env.NEXT_PUBLIC_PROJECT1);
const Project2 = JSON.parse(process.env.NEXT_PUBLIC_PROJECT2);
const Project3 = JSON.parse(process.env.NEXT_PUBLIC_PROJECT3);
const Project4 = JSON.parse(process.env.NEXT_PUBLIC_PROJECT4);
import { TransitionLink } from "@/components/TransitionLink";
export function FootMenu() {
  return (
    <>
      <div className=" flex flex-col justify-self-center">
        <hr className="hidden md:block border-2 rounded-full border-dashed" />

        <div className=" flex md:flex-row md:justify-between md:p-10 p-3 justify-center flex-col-reverse md:gap-0 gap-14">
          <div className="flex flex-col gap-5 sm:items-center md:items-start">
            <h1 className="md:text-4xl md:w-2/5 text-2xl sm:text-center md:text-left ">
              Seamlessly Integrating User Experiences with Impactful Brand
              Identity Design.
            </h1>
            <p className="text-sm">Nat@uriri.com.ng</p>
            <p className="text-sm">(234) 805 396 48 26</p>
            <p className="text-sm">
              © All rights reserved 2025 Nathaniel Uriri
            </p>
          </div>
          <hr className="border-black dark:border-white border-2 rounded-3xl  md:hidden" />
          <div className="flex flex-col gap-5 sm:items-center md:items-start">
            <h1 className="transition-all duration-100 bg-zinc-100 text-black text-xl font-medium me-2 px-1.5 py-1.5 rounded dark:bg-zinc-900 dark:text-white w-fit">
              Projects
            </h1>
            <TransitionLink passHref legacyBehavior href={Project1["link"]}>
              <a target="_blank">
                <p className="text-sm" variant="outline">
                  {Project1["name"]}
                </p>
              </a>
            </TransitionLink>

            <TransitionLink passHref legacyBehavior href={Project2["link"]}>
              <a target="_blank">
                <p className="text-sm" variant="outline">
                  {Project2["name"]}
                </p>
              </a>
            </TransitionLink>
            <TransitionLink passHref legacyBehavior href={Project3["link"]}>
              <a target="_blank">
                <p className="text-sm" variant="outline">
                  {Project3["name"]}
                </p>
              </a>
            </TransitionLink>
            <TransitionLink passHref legacyBehavior href={Project4["link"]}>
              <a target="_blank">
                <p className="text-sm" variant="outline">
                  {Project4["name"]}
                </p>
              </a>
            </TransitionLink>
          </div>
          <hr className="border-black dark:border-white rounded-3xl border-2  md:hidden" />
        </div>
      </div>
    </>
  );
}
