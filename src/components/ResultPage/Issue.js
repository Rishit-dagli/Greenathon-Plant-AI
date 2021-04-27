import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Issue = ({
  issueImage,
  issueTitle,
  issueBody,
  cureURL
}) => {

  return (
    <div className="issue">
      <img src={`${issueImage}`} alt={issueTitle} />
      <div className="issue-text">
        <h3>{issueTitle}</h3>
        <p>{issueBody}</p>
      </div>
      <a className="cure-button" href={cureURL} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon="plus-square" className="cure-button-icon" />
        <h4>CURE <br /> NOW</h4>
      </a>
    </div>
  );
};

export default Issue;
