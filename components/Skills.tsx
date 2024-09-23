import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiFigma,
  SiMongodb,
  SiPostgresql,
  // SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "React Query", icon: <SiReactquery /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Shadcn UI", icon: <SiShadcnui /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  // { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Postman", icon: <SiPostman /> },
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
                <TooltipTrigger className="group h-max w-max p-2 md:p-4 lg:p-6 bg-secondary text-secondary-foreground rounded-xl flex justify-center items-center outline-none">
                  <div className="group-hover:text-green-400 group-focus:text-green-400 text-2xl md:text-4xl lg:text-5xl transition-all duration-300">
                    {skill.icon}
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
