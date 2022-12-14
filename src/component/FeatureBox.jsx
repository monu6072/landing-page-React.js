import React from "react";

function FeatureBox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta odio
          quidem architecto, maxime quae in cumque reiciendis ab aperiam facilis
          facere officiis mollitia. Atque esse quaerat adipisci officiis, quasi
          modi?
        </p>
      </div>
    </div>
  );
}

export default FeatureBox;
