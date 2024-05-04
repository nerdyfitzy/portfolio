import React from "react";
import Intro from "./views/intro";
import Topbar from "./views/topbar";
import ProjectsList from "./views/projectsList";
import LanguageList from "./views/languageList";
import Footer from "./views/footer";

function App() {
  console.log(window.location.href);
  return (
    <div className=' flex flex-col relative'>
      <Topbar />
      <Intro />
      <ProjectsList />
      <LanguageList />
      <Footer />
    </div>
  );
}

export default App;
