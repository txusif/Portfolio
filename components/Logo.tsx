"use client";

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

import lightLogo from "@/public/light-logo.svg";
import darkLogo from "@/public/dark-logo.svg";

const Logo = () => {
  const { theme } = useTheme();

  const src = theme === "light" ? lightLogo : darkLogo;

  return (
    <Link
      href={"/"}
      className="outline-none focus-visible:text-muted-foreground"
    >
      {/* <h1 className="font-semibold text-4xl">
        txusif<span className="text-green-400">.</span>me
      </h1> */}
      <Image src={src} alt="logo" width={50} />
    </Link>
  );
};

export default Logo;
