import "./App.css";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { WhatDo } from "./components/WhatDo";
import { Educations } from "./components/Educations";
function App() {
  return (
    <div className="w-screen h-screen bg-[#212121]">
      <Header></Header>
      <AboutMe></AboutMe>
      <WhatDo></WhatDo>
      <Educations></Educations>
    </div>
  );
}

export default App;
