import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/themeButton";
import {Navbar} from "@/components/navBar";
import { Padding } from "./page";
import { FootMenu } from "@/components/footMenu";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nathaniel's Portfolio",
  description: "Portfolio for a software engineer/designer",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className=" dark:bg-black  transition-all duration-1000 grid">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <div className="flex mt-2 ml-4">
            <ThemeToggle />
          </div>
          <Padding />
          {children}
          <Padding />
          <FootMenu/>
        </ThemeProvider>
      </body>
    </html>
  );
}
