"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className="rounded-full focus-visible:ring-0 focus-visible:bg-secondary"
      onClick={handleToggle}
    >
      {theme === "light" ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;
