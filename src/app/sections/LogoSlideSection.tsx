"use client";
import React from "react";
import Image from "next/image";
import Section from "@/components/global/Section";

// Import logos
import html from "@/assets/icons/skill/skill-icons--html.svg";
import css from "@/assets/icons/skill/skill-icons--css.svg";
import javascript from "@/assets/icons/skill/skill-icons--javascript.svg";
import typescript from "@/assets/icons/icons8-typoskript-48.svg";
import mongoose from "@/assets/icons/skill/devicon--mongoose-wordmark.svg";
import expressjs from "@/assets/icons/skill/skill-icons--expressjs-light.svg";
import mongodb from "@/assets/icons/skill/skill-icons--mongodb.svg";
import nodejs from "@/assets/icons/skill/skill-icons--nodejs-light.svg";
import react from "@/assets/icons/skill/skill-icons--react-light.svg";
import tailwindcss from "@/assets/icons/skill/skill-icons--tailwindcss-dark.svg";
// Import additional skills
import nextjs from "@/assets/icons/skill/skill-icons--nextjs-light.svg";
import vite from "@/assets/icons/skill/skill-icons--react-light.svg"; // Using React icon for Vite as in Skills.tsx
import openai from "@/assets/icons/skill/SimpleIconsOpenai.svg";
import sql from "@/assets/icons/skill/SimpleIconsSql.svg";
import nosql from "@/assets/icons/skill/SimpleIconsNoSql.svg";

const logos = [
  html,
  css,
  javascript,
  typescript,
  nextjs,
  vite,
  mongoose,
  expressjs,
  mongodb,
  nodejs,
  react,
  tailwindcss,
  openai,
  sql,
  nosql,
];

const LogoSlideSection: React.FC = () => {
  return (
    <Section className="bg-accent border-y border-border p-0 relative">
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-accent via-accent/80 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient */}
        <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-accent via-accent/80 to-transparent z-10 pointer-events-none" />

        {/* Logos */}
        <div className="flex gap-8 items-center animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="w-16 h-16 flex-shrink-0 mx-6">
              <Image
                src={logo}
                alt="Logo"
                className="grayscale hover:grayscale-0 transition duration-300"
                width={64}
                height={64}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Section>
  );
};

export default LogoSlideSection;
