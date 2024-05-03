import React from "react";
import Intro from "./views/intro";
import Topbar from "./views/topbar";
import ProjectsList from "./views/projectsList";
import LanguageList from "./views/languageList";
import Footer from "./views/footer";
import ContactModal from "./views/contactModal";

function App() {
  return (
    <div className=' flex flex-col relative'>
      <Topbar />
      <ContactModal />
      <Intro />
      <ProjectsList />
      <LanguageList />
      <Footer />
    </div>
  );
}

export default App;
