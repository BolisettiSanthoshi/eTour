import React from "react";
import image2 from "./assets/market.jpg";
import './AboutStyle.css';
const Aboutus = () => {
  return (
    <div>
      <section className="about section-padding about-section p-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 ">
              <div className="section-title">
                <br></br>
                <div className="section-subtitle">About Us</div>
                <h2 className="section_main_title">
                  WE WILL <strong>GUIDE YOU...</strong>
                </h2>
              </div>
              <div className="justify-content-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam a justo feugiat, suscipit nunc non, consectetur erat.
                  Aliquam sed elit sit amet libero fermentum pretium. Aliquam
                  dictum non ligula at laoreet. Sed sed lorem non diam ultricies
                  scelerisque. Nunc urna mauris, dignissim vel vehicula id,
                  volutpat ut arcu.
                </p>
                <p>
                  Fusce fringilla quam ut odio tincidunt suscipit. Nulla sodales
                  massa a consequat ornare. Vestibulum ac accumsan urna. Nunc a
                  lobortis neque, sed pharetra eros.
                </p>
                
                <div className="text-center">
                  <br></br>
                 
                  <button type="button" class="btn btn-info"> Read More</button>
                
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-sm-offset-2 d-flex mx-auto justify-content-center ">
            <img src={image2} alt="" className=".img-fluid img-thumbnail" />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
