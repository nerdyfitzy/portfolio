import React, { useRef, useState } from "react";
import submitData from "../helpers/submitData";

const darken = { background: "rgba(0, 0, 0, 0.6)" };
const back = {
  background: "linear-gradient(170.6deg, #292431 7.78%, #312B3B 92.9%)",
};

function ContactModal({ shown, handleClose }) {
  const email = useRef("");
  const message = useRef("");
  const [error, changeError] = useState("");
  if (!shown) return null;

  function handleClick(e) {
    if (e.target.getAttribute("id") === "modalBackground") handleClose();
  }

  async function submit(e) {
    e.preventDefault();
    if (email.current == null || message.current == null) {
      changeError("Please do not leave fields blank");
    } else {
      const valid = await submitData(email.current, message.current);
      if (valid) handleClose();
    }
  }

  return (
    <>
      <div
        className='w-screen h-screen flex justify-center items-center absolute z-30 top-0 right-0'
        style={darken}
        onClick={handleClick}
        id='modalBackground'
      >
        <div
          className='w-2/5 h-5/12 flex flex-col relative rounded-md z-50 px-10 py-8'
          style={back}
          id='modal'
        >
          <h2 className='font- text-3xl mb-4'>Contact Me</h2>
          <form action='' className='flex flex-col'>
            <label htmlFor='#email-input'>Your Email</label>
            <input
              className='text-black rounded-lg mb-4 h-12 w-72 text-left px-4 text-xs font-medium'
              type='email'
              name='email'
              id='email-input'
              onChange={(e) => (email.current = e.target.value)}
            />

            <label htmlFor=''>Message</label>
            <textarea
              className='rounded-lg resize-none mb-10 h-24 text-left px-4 text-xs font-medium text-black content-start p-4'
              name='message'
              id='message'
              onChange={(e) => (message.current = e.target.value)}
            ></textarea>

            <button
              className='bg-periwinkle w-24 h-12 rounded-lg hover:bg-[#aaa3c9] active:bg-[#918bad]'
              onClick={(e) => submit(e)}
            >
              Submit
            </button>
            <span className='text-red'>{error}</span>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactModal;
