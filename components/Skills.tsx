import Image from "next/image";

import { SiExpress } from "react-icons/si";

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
import expressjs from "@/public/skills/expressjs.svg";
import react from "@/public/skills/react.svg";
import nextjs from "@/public/skills/nextjs.svg";
import redux from "@/public/skills/redux.svg";
import tailwindcss from "@/public/skills/tailwind-css.svg";
import figma from "@/public/skills/figma.svg";
import github from "@/public/skills/github.svg";
import postman from "@/public/skills/postman.svg";
import mongodb from "@/public/skills/mongodb.svg";

const skills = [
  { name: "HTML", image: html5, icon: "" },
  { name: "CSS", image: css, icon: "" },
  { name: "JavaScript", image: javascript, icon: "" },
  { name: "TypeScript", image: typescript, icon: "" },
  { name: "Node.js", image: nodejs, icon: "" },
  { name: "Express.js", image: expressjs, icon: "" },
  { name: "React", image: react, icon: "" },
  { name: "Next.js", image: nextjs, icon: "" },
  { name: "React Query", image: react, icon: "" },
  { name: "Redux", image: redux, icon: "" },
  { name: "Tailwind CSS", image: tailwindcss, icon: "" },
  { name: "Shadcn UI", image: react, icon: "" },
  { name: "Figma", image: figma, icon: "" },
  { name: "MongoDB", image: mongodb, icon: "" },
  // { name: "Supabase", image: <SiSupabase /> ,icon:""},
  // { name: "PostgreSQL", image: <SiPostgresql /> ,icon:""},
  // { name: "Git", image: <SiGit /> ,icon:""},
  { name: "GitHub", image: github, icon: "" },
  { name: "Postman", image: postman, icon: "" },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 lg:px-0 space-y-4">
      <h1 className="text-center text-4xl font-medium">Skills</h1>
      <ul className="grid grid-cols-8 gap-y-8">
        {skills.map((skill, index) => (
          <li key={index} className="flex justify-center">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="group h-max w-max p-2 md:p-3 bg-secondary text-secondary-foreground rounded-xl flex justify-center items-center outline-none">
                  <div className="text-2xl md:text-4xl transition-all duration-300">
                    {/* {skill.icon} */}
                    {skill.image ? (
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        className="text-primary"
                      />
                    ) : (
                      skill.icon
                    )}
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
