import React from "react";

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          dolore reprehenderit in nisi incidunt reiciendis distinctio fugit
          inventore maiores natus qui itaque perferendis doloremque similique
          quo accusantium, eos sequi labore?
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
