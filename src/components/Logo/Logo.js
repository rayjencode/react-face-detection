import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt" options={{ max: 55 }}>
        <div className="Tilt-inner">
          <img className="logo" src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
