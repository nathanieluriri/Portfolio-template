import { TransitionLink } from "@/components/TransitionLink";
export function DesktopNav() {
  return (
    <div className="hidden md:flex gap-8">
      <TransitionLink
        href="/"
        className="hover:underline transition-all duration-75 dark:text-white"
      >
        Home
      </TransitionLink>

      <TransitionLink
        href="/about"
        className="hover:underline transition-all duration-75 dark:text-white"
      >
        About
      </TransitionLink>
      <TransitionLink
        href="/all-work"
        className="hover:underline transition-all duration-75 dark:text-white"
      >
        All Works
      </TransitionLink>
      <TransitionLink
        href="/contact"
        className="hover:underline transition-all duration-75 dark:text-white"
      >
        Contact
      </TransitionLink>
    </div>
  );
}
