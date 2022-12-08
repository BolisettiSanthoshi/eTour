import React from "react";
import Cards from "./Cards";
import image1 from "./assets/cultural.jpg";
import image3 from "./assets/river.jpg";
import image4 from "./assets/Watersports.jpg";
import image5 from "./assets/club.jpg";
import image6 from "./assets/beach.jpg";

const Card = () => {
  return (
    <div className="container-fluid d-flex justify-content-center mt-3 mb-3">
      <div className="row ">
        <div className="col-md-2 col-sm-2 h-100">
          <Cards
            imgsrc={image1}
            title="Cultural Exploration"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam felis, semper at quam vel, congue ornare magna. "
          />
        </div>
        <div className="col-md-2 col-sm-2 h-100">
          <Cards
            imgsrc={image6}
            title="Local Market visit"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam felis, semper at quam vel, congue ornare magna. "
          />
        </div>
        <div className="col-md-2 col-sm-2 h-100">
          <Cards
            imgsrc={image3}
            title="Mandovi River  cruise"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam felis, semper at quam vel, congue ornare magna. "
          />
        </div>
        <div className="col-md-2 col-sm-2 h-100">
          <Cards
            imgsrc={image4}
            title="Water sports at Grand island"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam felis, semper at quam vel, congue ornare magna. "
          />
        </div>
        <div className="col-md-2 col-sm-2 h-100">
          <Cards
            imgsrc={image5}
            title="Clubbing at Tito's lane"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam felis, semper at quam vel, congue ornare magna. "
          />
        </div>
        <div className="col-md-2 col-sm-2 h-100">
          <Cards
            imgsrc={image6}
            title="A day at Baga Beach"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam felis, semper at quam vel, congue ornare magna. "
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
