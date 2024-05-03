import React from "react";
import Link from "../components/link";
import Github from "../images/github-mark-white.png";
import Email from "../images/gmail.svg";
import Tooltip from "../components/Tooltip";

const copyEmail = () => {
  const addr = "fitzpatrickkayle9@gmail.com";
  navigator.clipboard.writeText(addr);
};

function Topbar() {
  return (
    <>
      <header className='bg-dark-green sticky top-0 z-10 w-screen h-20 border-b border-b-1 px-8 flex flex-row items-center justify-between text-white'>
        <ul className='flex list-none'>
          <Link name='Home' />
          <Link name='Projects' />
          <Link name='Skills' />
          <Link name='Contact Me' />
          {/* <Link name='Technologies and Frameworks' /> */}
        </ul>
        <div className='flex flex-row items-center gap-2'>
          <Tooltip message='Copy Email'>
            <div
              className='content-center px-1 active:bg-gray-500 hover:bg-gray-400 w-12 h-12 relative rounded-lg'
              onClick={copyEmail}
            >
              <img src={Email} alt='' height={40} width={40} />
            </div>
          </Tooltip>
          <Tooltip message='My Github'>
            <div className='active:bg-gray-500 hover:bg-gray-400 w-12 h-12 relative rounded-lg'>
              <a
                href='https://github.com/nerdyfitzy'
                target='_blank'
                rel='noreferrer'
                className='absolute left-1 top-1'
              >
                <img
                  className='drop-shadow-lg'
                  src={Github}
                  alt='Github Logo'
                  height={40}
                  width={40}
                />
              </a>
            </div>
          </Tooltip>
        </div>
      </header>
    </>
  );
}

export default Topbar;
