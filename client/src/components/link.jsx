import React from "react";

const names = {
  Home: "#home",
  Projects: "#projects",
  Skills: "#skills",
  "Contact Me": "#contactme",
};

function Link({ name, onClick }) {
  return (
    <li className='' onClick={onClick}>
      <a
        href={names[name]}
        className='mr-6 hover:underline hover:text-dark-blue'
      >
        {name}
      </a>
    </li>
  );
}

export default Link;
