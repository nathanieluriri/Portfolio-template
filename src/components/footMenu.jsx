const Project1 = JSON.parse(process.env.NEXT_PUBLIC_PROJECT1);
const Project2 = JSON.parse(process.env.NEXT_PUBLIC_PROJECT2);
const Project3 = JSON.parse(process.env.NEXT_PUBLIC_PROJECT3);
const Project4 = JSON.parse(process.env.NEXT_PUBLIC_PROJECT4);
import { TransitionLink } from "@/components/TransitionLink";
import Link from "next/link";
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
            <Link href="mailto:nat@uriri.com.ng?subject=Design%20Inquiry&body=Hi%20Nathaniel%2C%0D%0A%0D%0AI%20recently%20came%20across%20your%20portfolio%20and%20was%20really%20impressed%20with%20your%20work.%20I'm%20interested%20in%20working%20with%20you%20and%20would%20love%20to%20discuss%20your%20design%20services%20in%20more%20detail.%0D%0A%0D%0AThanks%20and%20looking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%2C%0D%0A%5BYour%20Name%5D"><p className="text-sm">nat@uriri.com.ng</p></Link>
            
            <Link href="tel:+2348053964826"><p className="text-sm">(234) 805 396 48 26</p></Link>
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
