import "./App.css";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { WhatDo } from "./components/WhatDo";
import { Educations } from "./components/Educations";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[#212121]">
      <Header />
      <AboutMe />
      <div className="flex md:flex-row flex-col items-center space-x-5 justify-center bg-[#212121]">
        <Educations />
        <Skills />
      </div>
      <WhatDo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
