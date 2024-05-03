import React from "react";
import Language from "../components/language";

const list = [
  "JavaScript",
  "Golang",
  "TypeScript",
  "React",
  "MySQL",
  "HTML",
  "CSS",
  "JQuery",
  "Tailwind CSS",
];

function LanguageList() {
  return (
    <>
      {/* TODO: FIX GRID AND MAKE THEM ALIGNED ON EACH SIDE */}
      <div className='w-full mb-20' id='skills'>
        <h2 className='translate-x-24 mb-14 text-periwinkle w-min pr-10 pb-2 text-3xl font-bold mb-2 border-b border-b-1'>
          Skills
        </h2>
        <div className='flex flex-row w-full justify-around'>
          {list.map((i) => (
            <Language name={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LanguageList;
