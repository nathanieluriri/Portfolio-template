"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { TransitionLink } from "@/components/TransitionLink";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";

export function MobileNavBar() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
      className="bg-black dark:bg-white transition-all duration-1000"
    >
      <SheetTrigger className="md:hidden dark:text-white text-black transition-all duration-75">
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="right" className="p-4 dark:bg-black dark:text-white ">
        <SheetHeader className="dark:bg-black">
          <SheetTitle>Menu </SheetTitle>
          <SheetDescription>Navbar</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-8 dark:bg-black">
          <SheetClose asChild className="dark:bg-black dark:text-white">
            <TransitionLink
              onClicked={() => setOpen(false)}
              href="/"
              className="hover:underline"
            >
              Home
            </TransitionLink>
          </SheetClose>

          <SheetClose asChild className="dark:bg-black dark:text-white">
            <TransitionLink
              onClicked={() => setOpen(false)}
              href="/about"
              className="hover:underline"
            >
              About
            </TransitionLink>
          </SheetClose>
          <SheetClose asChild className="dark:bg-black dark:text-white">
            <TransitionLink
              onClicked={() => setOpen(false)}
              href="/all-work"
              className="hover:underline"
            >
              All Work
            </TransitionLink>
          </SheetClose>

          <SheetClose asChild className="dark:bg-black dark:text-white">
            <TransitionLink
              onClicked={() => setOpen(false)}
              href="/contact"
              className="hover:underline"
            >
              Contact
            </TransitionLink>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
