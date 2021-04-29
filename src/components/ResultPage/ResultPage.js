import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IssueContainer from "./IssueContainer";
import CTA from "../Homepage/CTA";
import loader from "../../assets/images/loader.gif";

const ResultPage = ({ image, getDiseases, onTryAnotherClick, onClose }) => {

  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setDiseases(await getDiseases());
      setLoading(false);
    }
    fetchData();
  }, [getDiseases]);

  return (
    <>
      <div className="resultpage">
        <img src={image} alt="Plant" id="plant-photo" />
        {
          loading ?
            <img src={loader} alt="Loader" />
            :
            <>
              <IssueContainer diseases={diseases} />
              <CTA icon="cloud-upload-alt" text="Test Another" onClick={onTryAnotherClick} />
              <a href="https://forms.gle/bCNf3rMeKg71U95U9" className="cta">
                <FontAwesomeIcon icon="comments" />
                <p>Submit Feedback</p>
              </a>
            </>
        }
      </div>

      <FontAwesomeIcon className="close-button" icon="window-close" onClick={onClose} />
    </>
  );
};

export default ResultPage;
