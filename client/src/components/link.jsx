import React from "react";

const names = {
  Home: "#home",
  Projects: "#projects",
  Languages: "#languages",
  "Technologies and Frameworks": "#techframeworks",
};

function Link({ name }) {
  return (
    <>
      <a
        href={names[name]}
        className='mr-6 hover:underline hover:text-dark-blue'
      >
        {name}
      </a>
    </>
  );
}

export default Link;
