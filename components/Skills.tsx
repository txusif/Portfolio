"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import html5 from "@/public/skills/html5.svg";
import css from "@/public/skills/css.svg";
import javascript from "@/public/skills/javascript.svg";
import typescript from "@/public/skills/typescript.svg";
import nodejs from "@/public/skills/nodejs.svg";
import react from "@/public/skills/react.svg";
import redux from "@/public/skills/redux.svg";
import tailwindcss from "@/public/skills/tailwind-css.svg";
import figma from "@/public/skills/figma.svg";
import postman from "@/public/skills/postman.svg";
import mongodb from "@/public/skills/mongodb.svg";
import shadcnui from "@/public/skills/shadcn-ui.png";
import reactQuery from "@/public/skills/react-query.svg";

import expressjs from "@/public/skills/express-js.svg";
import expressjsDark from "@/public/skills/express-js-dark.svg";
import nextjs from "@/public/skills/next-js.svg";
import nextjsDark from "@/public/skills/next-js-dark.svg";
import github from "@/public/skills/github.svg";
import githubDark from "@/public/skills/github-dark.svg";

const skills = [
  { name: "HTML", image: html5 },
  { name: "CSS", image: css },
  { name: "JavaScript", image: javascript },
  { name: "TypeScript", image: typescript },
  { name: "Node.js", image: nodejs },
  {
    name: "Express.js",
    image: expressjs,
    darkImage: expressjsDark,
  },
  { name: "React", image: react },
  {
    name: "Next.js",
    image: nextjs,
    darkImage: nextjsDark,
  },
  { name: "React Query", image: reactQuery },
  { name: "Redux", image: redux },
  { name: "Tailwind CSS", image: tailwindcss },
  { name: "Shadcn UI", image: shadcnui },
  { name: "Figma", image: figma },
  { name: "MongoDB", image: mongodb },
  {
    name: "GitHub",
    image: github,
    darkImage: githubDark,
  },
  { name: "Postman", image: postman },
];

const Skills = () => {
  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <section id="skills" className="px-8 lg:px-0 space-y-8">
      <h1 className="text-center text-4xl font-medium">Skills</h1>
      <ul className="grid grid-cols-8 gap-y-8 gap-x-1 md:gap-x-0">
        {skills.map((skill, index) => (
          <li key={index} className="flex justify-center">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="group h-max w-max p-1 md:p-3 bg-secondary text-secondary-foreground rounded-xl flex justify-center items-center outline-none">
                  <div className="transition-all duration-300">
                    <Image
                      src={
                        skill.darkImage
                          ? isLight
                            ? skill.image
                            : skill.darkImage
                          : skill.image
                      }
                      alt={skill.name}
                      width={48}
                      height={48}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="font-medium text-sm">
                  {skill.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
