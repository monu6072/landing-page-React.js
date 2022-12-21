import React from "react";
import Navbar from "./Navbar";
function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Launch Your App</span>With Confindance and Creativity
        </h1>
        <p className="details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, beatae temporibus ratione corrupti nihil odio ducimus
          iure sit, ea sequi vitae nesciunt, sed laudantium sunt quis molestias
          optio sint tenetur.
        </p>
        <a href="ok" className="cv-btn">
          Dawnload
        </a>
      </div>
    </div>
  );
}

export default Header;
