import React, { useState } from "react";
import purpl from "../images/purpl.png";
import anon from "../images/anonmessager.png";
import purplold from "../images/purpl 1.0.png";
import dfox from "../images/druggedfoxd.png";

import js from "../images/js.svg";
import react from "../images/react.svg";
import html from "../images/html.svg";
import tailwind from "../images/tailwind.svg";
import css from "../images/css.svg";
import jquery from "../images/jquery.svg";
import mysql from "../images/mysql.svg";
import Github from "../images/github-mark-white.png";
import ts from "../images/ts.svg";
import nextjs from "../images/nextjs.svg";

const imgMap = {
  purpl,
  "Anonymous Messager": anon,
  "purpl (1.0)": purplold,
  Druggedfoxd: dfox,
};

const imgs = [
  { name: "js", svg: js },
  { name: "react", svg: react },
  { name: "html", svg: html },
  { name: "tailwind", svg: tailwind },
  { name: "css", svg: css },
  { name: "jquery", svg: jquery },
  { name: "mysql", svg: mysql },
  { name: "ts", svg: ts },
  { name: "nextjs", svg: nextjs },
];

function Project({ name, description, link, builtWith }) {
  const [tech] = useState(imgs.filter((img) => builtWith.includes(img.name)));
  return (
    <>
      <div className='flex w-96 p-4 drop-shadow-2xl bg-hooker-green gap-3 flex-col rounded-lg justify-between items-center'>
        <h3 className='text-white font-bold font-lg'>{name}</h3>
        <div className='min-h-56 w-full content-center'>
          <img
            className='drop-shadow-lg'
            src={imgMap[name]}
            alt={name}
            // width={200}
            // height={200}
          />
        </div>

        <p className='border-t border-t-1 pt-4 text-center'>{description}</p>
        <div className='w-full flex flex-row justify-around px-10'>
          {tech.map((item) => (
            <img
              src={item.svg}
              alt={item.name}
              key={item.name}
              height={25}
              width={25}
            />
          ))}
        </div>
        <div className='p-2 active:bg-gray-500 hover:bg-gray-400 rounded-lg min-w-min min-h-min'>
          <a href={link} target='_blank' rel='noreferrer'>
            <img src={Github} alt='Github Logo' width={30} height={30} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;
