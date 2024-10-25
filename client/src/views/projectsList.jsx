import React from "react";
import Project from "../components/project";

const projects = [
  {
    name: "purpl",
    link: "https://github.com/nerdyfitzy/purpl-react",
    description:
      "The 2.0 version of purpl, an app meant to aid resellers in their day-to-day work. A completely refactored codebase from the original, it contained tools for managing inventory, monitoring websites, analyzing market data, and more.",
    builtWith: ["react", "js", "tailwind"],
  },
  {
    name: "Druggedfoxd",
    link: "https://github.com/nerdyfitzy/druggedfoxd",
    description:
      "A publicly available project to organize and filter through over 750 Druggedfox lessons. Includes user authentication and bookmarking features to make finding videos easier.",
    builtWith: ["nextjs", "ts", "tailwind", "mysql"],
  },
];

function ProjectsList() {
  return (
    <>
      {/* TODO: FIX GRID AND MAKE THEM ALIGNED ON EACH SIDE */}
      <div className='w-full mb-20' id='projects'>
        <h2 className='translate-x-24 mb-14 text-periwinkle w-min pr-10 pb-2 text-3xl font-bold mb-2 border-b border-b-1'>
          Projects
        </h2>
        <div className='flex flex-row justify-around'>
          {projects.map((proj) => (
            <Project {...proj} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsList;
