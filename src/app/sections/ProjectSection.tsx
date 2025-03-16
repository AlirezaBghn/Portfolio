"use client";

import React from "react";
import Section from "@/components/global/Section";
import ParallaxStack from "@/components/projects/ParallaxStack";
import projectImage from "@/assets/images/projects/1.png";
import projectImage2 from "@/assets/images/projects/2.png";
import { StaticImageData } from "next/image";

// Import React icon
import reactIcon from "@/assets/icons/skill/skill-icons--react-light.svg";

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
  codeLink: string;
}

// Array of projects
const projects: Project[] = [
  {
    id: 1,
    title: "TheraSync - AI-Powered Therapy Platform",
    description:
      "TheraSync enhances mental health support with AI, offering accessible and personalized therapy. It simulates therapy sessions, analyzes user data to understand emotions, and provides tailored guidance.",
    image: projectImage,
    color: "bg-card",
    logo: reactIcon,
    techUsed: [
      "React js",
      "Node js",
      "Mongodb",
      "Mongoose",
      "Express js",
      "OpenAI API",
      "Tailwind",
      "DaisyUI",
    ],
    demoLink: "https://therasync.onrender.com/",
    codeLink: "https://github.com/AlirezaBghn/TherapyPlatformFE",
  },
  {
    id: 2,
    title: "AI-Powered Pokémon Battle",
    description:
      "Two Exciting Pokémon Games: Pokémon Guessing Game – AI-powered guidance helps players make intuitive guesses. Pokémon Battle Game – Engaging battles enhanced with AI support.",
    image: projectImage2,
    color: "bg-card",
    logo: reactIcon,
    techUsed: [
      "React js",
      "Node Js",
      "Mongodb",
      "Express js",
      "Tailwind",
      "DaisyUI",
      "OpenAI API",
      "Javascript",
    ],
    demoLink: "https://pokemon-battle-game-1-9ua0.onrender.com",
    codeLink: "https://github.com/AlirezaBghn/Pokemon-Battle-game",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Main Section */}
      <Section className={"py-10 relative"}>
        <div className="flex flex-col justify-center text-center py-10 w-2/3 mx-auto max-mobile-lg:w/full z-10">
          <h1>Projects</h1>
          <p>
            Explore a collection of my projects that showcase my skills in web
            development, problem-solving, and creating user-friendly
            applications. Each project is built with modern technologies and
            designed to deliver a seamless user experience.{" "}
            <strong className="text-orange-500">
              Please be aware that due to potential server demands, initial load
              times may vary; your patience is appreciated.
            </strong>
          </p>
        </div>

        {/* Parallax Stack */}
        <div>
          <ParallaxStack projects={projects as Project[]} />
        </div>

        {/* Gradient Blur Effect */}
        <div className="absolute top-0 inset-0 blur-[120px] -z-10">
          <div
            style={{
              clipPath:
                "polygon(0% 90.5%, 36.75% 77.5%, 73.07% 74.24%, 100% 68.25%, 92.28% 77.5%, 100% 100%, 87.37% 79.84%, 75% 75%, 57.48% 85.62%, 32.25% 58.25%, 32.25% 90.5%)",
            }}
            className="sticky top-0 h-[100vh] w-full object-cover -z-10 bg-gradient-to-r from-primary/60 to-destructive/50"
          />
        </div>
      </Section>
    </div>
  );
};

export default ProjectSection;
