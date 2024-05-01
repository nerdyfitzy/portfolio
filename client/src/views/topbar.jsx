import React from "react";
import Link from "../components/link";
import Github from "../images/github-mark-white.png";

function Topbar() {
  return (
    <>
      <div className='w-100 h-20 flex flex-row items-center justify-between text-white'>
        <div>
          <Link name='Home' />
          <Link name='Projects' />
          <Link name='Languages' />
          <Link name='Technologies and Frameworks' />
        </div>
        <div>
          <a
            href='https://github.com/nerdyfitzy'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='mr-4'
              src={Github}
              alt='Github Logo'
              height={40}
              width={40}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Topbar;
