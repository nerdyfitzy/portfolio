import React, { useState } from "react";

const darken = { background: "rgba(0, 0, 0, 0.6)" };
const back = {
  background: "linear-gradient(170.6deg, #292431 7.78%, #312B3B 92.9%)",
};

function ContactModal({ shown, handleClose }) {
  const [uri, changeUri] = useState(window.location.href);
  console.log(window.location.href);
  if (!shown) return null;
  function handleClick(e) {
    if (e.target.getAttribute("id") === "modalBackground") handleClose();
  }
  return (
    <>
      <div
        className='w-full h-full flex justify-center items-center absolute z-30'
        style={darken}
        onClick={handleClick}
        id='modalBackground'
      >
        <div
          className='w-2/5 h-2/5 flex flex-col relative rounded-md z-50'
          style={back}
          id='modal'
        ></div>
      </div>
    </>
  );
}

export default ContactModal;
