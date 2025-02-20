"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function sleep(ms)  {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  onClicked,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");
    if (onClicked!==undefined){
        {onClicked();}
    }
    body?.classList.add("page-transition");

    await sleep(430);
    body?.classList.remove("page-transition");
    await sleep(0);
    router.push(href);
    await sleep(500);


   
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};