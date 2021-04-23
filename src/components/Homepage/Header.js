import React from "react";
import NavBar from "./NavBar";
import CTA from "./CTA";

const Header = ({onTryNowClick}) => {
  return (
    <div className="header">
      <NavBar onTryNowClick={onTryNowClick}/>
      <h1 className="header-text">
        Try our AI Powered <br /> Disease Detection
      </h1>
      <CTA icon="cloud-upload-alt" text="Try Now" onClick={onTryNowClick}/>
    </div>
  );
};

export default Header;
