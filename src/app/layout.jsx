import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/themeButton";
import { TransitionLink } from "@/components/TransitionLink";
import Link from "next/link";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";
import { Padding } from "./page";

function Navbar() {
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

      {/* Mobile Menu */}
      <Sheet className="bg-black dark:bg-white">
        <SheetTrigger className="md:hidden dark:text-white text-black transition-all duration-75">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="p-4 dark:bg-black dark:text-white "
        >
          <SheetHeader className="dark:bg-black">
            <SheetTitle>Menu </SheetTitle>
            <SheetDescription>Navbar</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-8 dark:bg-black">
            <SheetClose asChild className="dark:bg-black dark:text-white">
              <TransitionLink href="/" className="hover:underline">
                Home
              </TransitionLink>
            </SheetClose>

            <SheetClose asChild className="dark:bg-black dark:text-white">
              <TransitionLink href="/about" className="hover:underline">
                About
              </TransitionLink>
            </SheetClose>
            <SheetClose asChild className="dark:bg-black dark:text-white">
              <TransitionLink href="/all-work" className="hover:underline">
                All Work
              </TransitionLink>
            </SheetClose>

            <SheetClose asChild className="dark:bg-black dark:text-white">
              <TransitionLink href="/contact" className="hover:underline">
                Contact
              </TransitionLink>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "First App",
  description: "Nat Edited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" dark:bg-black  transition-all duration-1000 grid">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <div className="flex mt-2 ml-4">
            <ThemeToggle />
          </div>
          <Padding />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
