import React from "react";

import './CardStyle.css'
const Cards = (props) => {
  return (
    <div>
      <div className="card text-center shadow mt-3 mb-3 h-100 ">
        <div className="overflow">
          <img src={props.imgsrc} alt="LocalMarket"  className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">{props.paragraph}</p>
          <a href="/" className="btn btn-outline-success ">
            know more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
