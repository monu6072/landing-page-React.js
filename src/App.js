import React from "react";
import Header from "./component/Header";
import Feature from "./component/Feature";
import Presentation from "./component/Presentation";
import About from "./component/About";
import aboutimage from "./images/Frame 19.png";
import aboutimage1 from "../src/images/download.png";

function App() {
  return (
    <div>
      <Header />
      <Feature />
      <About
        image={aboutimage}
        title="Comes with All ou Need daily Life"
        button="Get the App"
      />
      <Presentation />
      <About
        image={aboutimage1}
        title="Dawnload And Get The APP Now "
        button="Dawnload"
      />
    </div>
  );
}

export default App;
