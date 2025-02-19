import { TransitionLink } from "@/components/TransitionLink";
import {MobileNavBar} from "@/components/mobileNav"
import {DesktopNav} from "@/components/desktopNav"
export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b transition-all duration-75">
      {/* Left: Logo */}
      <TransitionLink
        href="/"
        className="text-xl font-bold dark:text-white text-black transition-all duration-75"
      >
        Nathy
      </TransitionLink>

      {/* Desktop Navigation */}
      <DesktopNav/>

      {/* Mobile Menu */}
      <MobileNavBar/>
    </nav>
  );
}
