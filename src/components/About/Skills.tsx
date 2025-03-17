"use client";

import { motion } from "motion/react";
import React from "react";
import Image from "next/image";

// Import all skill icons from your assets
import reactIcon from "@/assets/icons/skill/skill-icons--react-light.svg";
import javascriptIcon from "@/assets/icons/skill/skill-icons--javascript.svg";
import htmlIcon from "@/assets/icons/skill/skill-icons--html.svg";
import cssIcon from "@/assets/icons/skill/skill-icons--css.svg";
import tailwindIcon from "@/assets/icons/skill/skill-icons--tailwindcss-dark.svg";
import mongodbIcon from "@/assets/icons/skill/skill-icons--mongodb.svg";
import nodeJsIcon from "@/assets/icons/skill/skill-icons--nodejs-light.svg";
import mongooseIcon from "@/assets/icons/skill/devicon--mongoose-wordmark.svg";
import expressIcon from "@/assets/icons/skill/skill-icons--expressjs-light.svg";
import sqlIcon from "@/assets/icons/skill/SimpleIconsSql.svg";
import nosqlIcon from "@/assets/icons/skill/SimpleIconsNoSql.svg";

// Using correct icon paths for Vite and OpenAI
import viteIcon from "@/assets/icons/skill/skill-icons--react-light.svg"; // Temporarily reusing React icon for Vite
import openaiIcon from "@/assets/icons/skill/SimpleIconsOpenai.svg"; // Using the correct OpenAI icon

// Define the type for a skill
interface Skill {
  icon: string;
  name: string;
}

// Define the type for categories
interface Categories {
  [key: string]: Skill[];
}

const Skills: React.FC = () => {
  const categories: Categories = {
    frontend: [
      { icon: reactIcon, name: "React.js" },
      { icon: viteIcon, name: "Vite" },
      { icon: javascriptIcon, name: "JavaScript" },
      { icon: htmlIcon, name: "HTML" },
      { icon: cssIcon, name: "CSS" },
      { icon: tailwindIcon, name: "Tailwind CSS" },
    ],
    backend: [
      { icon: nodeJsIcon, name: "Node.js" },
      { icon: expressIcon, name: "Express" },
      { icon: mongooseIcon, name: "Mongoose" },
      { icon: openaiIcon, name: "OpenAI API" },
    ],
    databases: [
      { icon: mongodbIcon, name: "MongoDB" },
      { icon: sqlIcon, name: "SQL" },
      { icon: nosqlIcon, name: "NoSQL" },
    ],
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      {Object.entries(categories).map(([category, skills]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-3 capitalize">{category}</h2>
          <div className="flex flex-wrap justify-start items-center gap-5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="bg-secondary text-secondary-foreground text-2xl py-2 px-3 font-bold flex gap-2 items-center justify-center border border-border rounded-lg hover:bg-secondary/90 hover:shadow-lg"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={24}
                  height={24}
                />
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
