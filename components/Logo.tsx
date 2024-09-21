import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="font-semibold text-4xl">
        txusif<span className="text-green-400">.</span>
      </h1>
    </Link>
  );
};

export default Logo;
