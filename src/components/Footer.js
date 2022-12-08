import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css';

const Footer = () => {
  return (
    <div className="bottom">
      <footer className=" bg-dark text-lg-start text-white">
        <div className="container p-2 pb-0">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3">
              <br />

              <Link to="/about" className="Link text-white">
                AboutUs
              </Link>
            </div>
            
            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-6 col-xl-6 mx-auto mt-3">
              <p className="text-uppercase mb-4 font-weight-bold">Follow us</p>

              {/* Facebook  */}
              <a
                className="btn btn-primary rounded-circle m-1"
                style={{ backgroundColor: "#3b5998" }}
                role="button"
                href=" https://www.facebook.com/"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              {/* Twitter */}
              <a
                className="btn btn-primary rounded-circle m-1"
                style={{ backgroundColor: " #55acee" }}
                href="https://twitter.com/"
                role="button"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              {/* Google */}
              <a
                className="btn btn-primary rounded-circle m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="https://www.google.co.in/ "
                role="button"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>

              {/*Instagram */}
              <a
                className="btn btn-primary rounded-circle m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/ "
                role="button"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              {/* Linkedin */}
              <a
                className="btn btn-primary rounded-circle m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="https://www.linkedin.com/ "
                role="button"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <FaHome /> GOA, NY 10012, India
              </p>
              <p>
                <FaEnvelope /> info@gmail.com
              </p>
              <p>
                <FaPhoneAlt /> + 01 234 567 88
              </p>
              <p>
                <FaPhoneAlt /> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href=" ">
           {""} eTourGoa.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
