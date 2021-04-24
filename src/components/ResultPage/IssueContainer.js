import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Issue from "./Issue";

const IssueContainer = ({ diseases }) => {
  return (
    <div className="issue-container">
      <div className="issue-counter">
        <FontAwesomeIcon icon="exclamation-triangle" className="issue-counter-icon" />
        <h2>{diseases.length} Issue{diseases.length > 1 ? 's' : ''} Found</h2>
      </div>

      {
        diseases.map(disease => (
          <Issue
            issueImage={disease.image}
            issueTitle={disease.disease}
            issueBody={disease.name}
            cureURL={disease.cureURL}
          />
        ))
      }
    </div>
  );
};

export default IssueContainer;
