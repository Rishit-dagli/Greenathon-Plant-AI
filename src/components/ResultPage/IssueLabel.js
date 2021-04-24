import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IssueLabel = ({ icon, label }) => {
  return (
    <div className="issue-label">
      <FontAwesomeIcon icon={`${icon}`} />
      <p>{label}</p>
    </div>
  );
};

export default IssueLabel;
