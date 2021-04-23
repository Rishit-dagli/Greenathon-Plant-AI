import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IssueContainer from "./IssueContainer";
import CTA from "../Homepage/CTA";

const ResultPage = ({image, getDiseases, onTryAnotherClick, onClose}) => {

  const [diseases, setDiseases] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      setDiseases(await getDiseases());
    }
    fetchData();
  },[getDiseases]);

  return (
    <>
      <div className="resultpage">
        <img src={image} alt="Plant" id="plant-photo"/>
        <IssueContainer diseases={diseases}/>
        <CTA icon="cloud-upload-alt" text="Test Another" onClick={onTryAnotherClick}/>
        <CTA icon="comments" text="Submit Feedback" />
      </div>

      <FontAwesomeIcon className="close-button" icon="window-close" onClick={onClose}/>
    </>
  );
};

export default ResultPage;
