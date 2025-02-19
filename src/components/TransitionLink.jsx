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

    body?.classList.add("page-transition");

    await sleep(230);
    router.push(href);
    await sleep(230);
    if (onClicked!==undefined){
        {onClicked();}
    }
    await sleep(230);
    body?.classList.remove("page-transition");
    await sleep(10);
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};