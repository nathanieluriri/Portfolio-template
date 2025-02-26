import { TransitionLink } from "@/components/TransitionLink";
import { MobileNavBar } from "@/components/mobileNav";
import { DesktopNav } from "@/components/desktopNav";
import Image from "next/image";
export function Navbar() {
  return (
    <nav className=" sticky top-0 bg-white dark:bg-black z-50 flex items-center justify-between p-4 border-b transition-all duration-75">
      {/* Left: Logo */}
      <TransitionLink
        href="/"
        className="text-xl font-bold dark:text-white text-black transition-all duration-75"
      >
        Nathaniel
      </TransitionLink>

      {/* Desktop Navigation */}
      <DesktopNav />

      {/* Mobile Menu */}
      <MobileNavBar />
    </nav>
  );
}
