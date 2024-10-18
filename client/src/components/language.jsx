import React from "react";
import js from "../images/js.svg";
import ts from "../images/ts.svg";
import mysql from "../images/mysql.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import jquery from "../images/jquery.svg";
import react from "../images/react.svg";
import tailwind from "../images/tailwind.svg";
import golang from "../images/golang.svg";

const imgs = {
  JavaScript: js,
  Golang: golang,
  TypeScript: ts,
  React: react,
  MySQL: mysql,
  HTML: html,
  CSS: css,
  JQuery: jquery,
  "Tailwind CSS": tailwind,
};

function Language({ name }) {
  return (
    <>
      <div className='flex flex-col text-white text-xl justify-around items-center text-center '>
        <img
          className='mb-4'
          src={imgs[name]}
          alt={name}
          id={name}
          width={100}
          height={100}
        />
        <label htmlFor={`#${name}`}>{name}</label>
      </div>
    </>
  );
}

export default Language;
