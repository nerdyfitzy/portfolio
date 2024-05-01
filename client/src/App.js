import React from "react";
import Intro from "./views/intro";
import Topbar from "./views/topbar";

function App() {
  return (
    <div className='bg-gradient-to-b h-screen from-dark-green to-[#093d30] flex flex-col relative'>
      <Topbar />
      <Intro />
    </div>
  );
}

export default App;
