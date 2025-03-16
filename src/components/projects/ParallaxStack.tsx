"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useTransform, useScroll, MotionValue } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { SquareArrowOutUpRight, Code, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { StaticImageData } from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define the type for code links
interface CodeLinks {
  frontend?: string;
  backend?: string;
  main?: string;
}

// Define the type for a project
interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  color: string;
  logo: StaticImageData;
  techUsed: string[];
  demoLink: string;
  codeLink: string | CodeLinks; // Updated to handle either a single link or multiple links
}

// Define the props for the ParallaxStack component
interface ParallaxStackProps {
  projects: Project[]; // Array of projects
}

export default function ParallaxStack({ projects }: ParallaxStackProps) {
  const containerRef = useRef<HTMLDivElement>(null); // Typed as HTMLDivElement

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.03; // Smooth scaling effect
        return (
          <Card
            key={project.id}
            index={i}
            project={project}
            progress={scrollYProgress}
            range={[i * 0.15, 1]} // Adjusted range for smooth transition
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}

// Define the props for the Card component
interface CardProps {
  project: Project; // Project data
  progress: MotionValue<number>; // Corrected type for progress
  range: [number, number]; // Range for the animation
  targetScale: number; // Target scale for the card
  index: number; // Index of the card
}

const Card: React.FC<CardProps> = ({
  project,
  progress,
  range,
  targetScale,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null); // Typed as HTMLDivElement

  // Slight initial up-scale for effect (applied to the card, not the image)
  const scale = useTransform(progress, range, [1, targetScale]);

  // Moves cards up smoothly
  const translateY = useTransform(progress, [0, 1.5], [index * 50, 15]);

  // Check if codeLink is a string or an object with multiple links
  const hasMultipleRepos = typeof project.codeLink !== "string";

  return (
    <motion.div
      ref={cardRef}
      className="sticky w-full top-20 h-screen"
      style={{ translateY }}
    >
      <motion.div
        className={`w-full max-tablet-lg:min-h-[50vh] max-mobile-lg:min-h-[60vh] rounded-2xl overflow-hidden bg-card relative shadow-lg hover:shadow-[0px_5px_20px] hover:shadow-muted border border-border ${project.color} origin-top z-10`}
        style={{ scale }}
      >
        <div className="flex max-mobile-lg:flex-col justify-between w-full relative z-20">
          {/* Image Section */}
          <div className="basis-4/6 rounded-3xl p-4 max-mobile-sm:p-2 overflow-hidden">
            <div className="w-full h-full overflow-hidden rounded-xl border border-border">
              <Image
                src={project.image}
                width={1400}
                height={1000}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="basis-2/6 flex flex-col gap-3 justify-between p-4 max-mobile-sm:p-2 max-mobile-sm:pt-0 relative">
            <div>
              <h2 className="max-mobile-sm:text-2xl">{project.title}</h2>
              <p className="max-mobile-sm:text-md max-mobile-sm:max-h-[20vh] max-mobile-sm:overflow-y-auto max-mobile-sm:text-ellipsis">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techUsed.map((tech) => (
                  <Badge
                    className="rounded-sm text-sm shadow-lg text-nowrap"
                    key={tech}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex gap-2 items-end justify-between">
              <div className="flex gap-2">
                {/* Code Button - Either dropdown or regular link */}
                {hasMultipleRepos ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button>
                        Code
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {(project.codeLink as CodeLinks).frontend && (
                        <DropdownMenuItem asChild>
                          <Link
                            href={(project.codeLink as CodeLinks).frontend!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                          >
                            Frontend
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {(project.codeLink as CodeLinks).backend && (
                        <DropdownMenuItem asChild>
                          <Link
                            href={(project.codeLink as CodeLinks).backend!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                          >
                            Backend
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {(project.codeLink as CodeLinks).main && (
                        <DropdownMenuItem asChild>
                          <Link
                            href={(project.codeLink as CodeLinks).main!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                          >
                            Repository
                          </Link>
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={project.codeLink as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground no-underline"
                  >
                    <Button>
                      Code
                      <Code className="translate-y-[-2.5px] ml-1" />
                    </Button>
                  </Link>
                )}

                {/* Demo Button */}
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground no-underline"
                >
                  <Button
                    variant="outline"
                    className="flex items-center font-bold"
                  >
                    Demo
                    <SquareArrowOutUpRight className="translate-y-[-2.5px] ml-1" />
                  </Button>
                </Link>
              </div>
              <Image
                src={project.logo}
                alt="project logo"
                className="absolute right-2 bottom-2 w-20"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
