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
    name: "purpl (1.0)",
    link: "https://github.com/nerdyfitzy/purpl-ipc-rewrite",
    description:
      "An earlier version of the purpl project with the same ideas as the later version. Built in a completely different framework with different technologies, it carried only a few of the features that the later version of purpl did.",
    builtWith: ["html", "css", "js", "jquery"],
  },
  {
    name: "Anonymous Messager",
    link: "https://github.com/nerdyfitzy/cisc-3300-project",
    description:
      "A project where users could asynchronously and anonymously send messages which would be stored in an SQL database. A websocket based app, it was built as an example of how to use websockets on both the client and server sides.",
    builtWith: ["react", "js", "tailwind", "mysql"],
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
            <Project
              name={proj.name}
              description={proj.description}
              link={proj.link}
              builtWith={proj.builtWith}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsList;
