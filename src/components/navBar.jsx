"use client";
import { TransitionLink } from "@/components/TransitionLink";
import { MobileNavBar } from "@/components/mobileNav";
import { DesktopNav } from "@/components/desktopNav";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState,useEffect } from "react";




export function Navbar() {
  const { theme } = useTheme(); // Get the current theme (light or dark)
  const [imageSrc, setImageSrc] = useState("/anagram.png");
  useEffect(() => {
    // Set image source based on theme
    if (theme === "dark") {
      setImageSrc("/anagram.png"); // Dark theme image
    } else {
      setImageSrc("/anagram_light.png"); // Light theme image
    }
  }, [theme]); // Update the image whenever the theme changes
  return (
    <nav className=" sticky top-0 bg-white dark:bg-black z-50 flex items-center justify-between p-4 border-b transition-all duration-75">
      {/* Left: Logo */}
      <TransitionLink
        href="/"
        className="text-xl font-bold dark:text-white text-black transition-all duration-75"
      >
        <Image
        src={imageSrc}
        height={120}
        width={120}
        alt="Nav Image"
        />
      </TransitionLink>

      {/* Desktop Navigation */}
      <DesktopNav />

      {/* Mobile Menu */}
      <MobileNavBar />
    </nav>
  );
}
