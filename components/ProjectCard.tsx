import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "SportSpace",
    description:
      "A user-friendly platform for booking football and cricket turfs. Features an intuitive calendar interface for easy time slot reservations.",
    image: "/sport-space.png",
    github: "https://github.com/txusif/SportSpace",
    live: "https://sportspace.txusif.me",
    technologies: [
      "Nextjs",
      "Typescript",
      "Tailwind CSS",
      "Shadcn UI",
      "Supabase",
      "Google Auth",
    ],
  },
  {
    title: "Cake Crave",
    description:
      "A React-based website for ordering cakes, including vegan and eggless options. Showcases products through an engaging image carousel.",
    image: "/cake-crave.png",
    github: "https://github.com/txusif/cakecrave",
    live: "https://cakecrave.txusif.me",
    technologies: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Shadcn UI",
      "React Query",
      "Supabase",
      "Supabase Auth",
    ],
  },
  {
    title: "The Wild Oasis",
    description:
      "Admin dashboard for hotel bookings with dynamic charts using Recharts. Features React Query for state management and streamlined check-in/out processes.",
    image: "/the-wild-oasis.png",
    github: "https://github.com/txusif/the-wild-oasis",
    live: "https://the-wild-oasis.txusif.me",
    technologies: [
      "React",
      "Javascript",
      "Styled Components",
      "React Query",
      "Recharts",
      "Supabase",
      "Supabase Auth",
    ],
  },
  {
    title: "The Wild Oasis Client App",
    description:
      "Next.js app for booking hotel cabins. Allows guests to select dates and guest numbers for a seamless reservation experience.",
    image: "/the-wild-oasis-client.png",
    github: "https://github.com/txusif/the-wild-oasis-next",
    live: "https://the-wild-oasis-next.txusif.me",
    technologies: [
      "Nextjs",
      "Javascript",
      "Tailwind CSS",
      "Supabase",
      "Next Auth",
    ],
  },
  {
    title: "MediChain",
    description:
      "A blockchain-based platform for secure medical record storage and charitable healthcare campaigns. Users can store health documents securely and donate to support patients in need.",
    image: "/medichain.png",
    github: "https://github.com/txusif/MediChain",
    live: "https://medichain.txusif.me",
    technologies: [
      "React",
      "Javascript",
      "Tawilwind CSS",
      "Solidity",
      "Ethersjs",
      "IPFS",
      "Smart Contract",
      "Metamask",
      "Third Web",
      "Polygon",
    ],
  },
];

const ProjectCard = () => {
  return (
    <div className="space-y-12">
      {projects.map((project, index) => (
        <Card key={index} className="grid md:grid-cols-2">
          <div className="relative aspect-video">
            <Image
              src={project.image}
              alt={`${project.title} image`}
              className="max-md:rounded-t-xl md:rounded-l-xl object-contain"
              fill
            />
          </div>
          <div>
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology, index) => (
                  <Badge
                    key={index}
                    variant={"secondary"}
                    className="px-2 py-1 font-medium"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="space-x-4">
              <Link
                href={project.github}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "gap-x-2"
                )}
              >
                <SiGithub />
                <span>Source code</span>
              </Link>

              <Link
                href={project.live}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "gap-x-2"
                )}
              >
                <FaGlobe /> <span>Live demo</span>
              </Link>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCard;
