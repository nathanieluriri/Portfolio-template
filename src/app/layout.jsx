import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      {/* Left: Logo */}
      <Link href="/" className="text-xl font-bold">
        Nathy
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4">
        <Link href="/" className="hover:outline transition-all">
          Home
        </Link>
        <Link href="/about" className="hover:underline transition-all">
          About
        </Link>
        <Link href="/all-Work" className="hover:underline transition-all">
          All Works
        </Link>
        <Link href="/contact" className="hover:underline transition-all">
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="right" className="p-4">
          <SheetHeader>
            <SheetTitle>Menu </SheetTitle>
            <SheetDescription> Mobile Menu Bar</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-8">
            <SheetClose asChild>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/all-work" className="hover:underline">
                All Work
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
