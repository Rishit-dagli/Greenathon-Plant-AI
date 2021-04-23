import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Step = ({ stepNum, icon, stepTitle, stepDes }) => {
  return (
    <div className="step">
      <FontAwesomeIcon icon={`${icon}`} className="icon" />
      <div className="stepnum">{stepNum}</div>
      <h4 className="steptitle">{stepTitle}</h4>
      <p className="stepdes">{stepDes}</p>
    </div>
  );
};

export default Step;