import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CTA from "../Homepage/CTA";

const UploadPopup = ({onClose, onCapture}) => {

  const browseRef = React.createRef();
  const cameraRef = React.createRef();

  return (
    <>
      <div className="popup">
        <FontAwesomeIcon icon="images" />
        <CTA icon="folder-open" text="Browse" onClick={() => {browseRef.current.click()}}/>
        <CTA icon="camera" text="Camera" onClick={() => {cameraRef.current.click()}}/>
        <input ref={browseRef} type="file" style={{ display: 'none' }} accept="image/*" onChange={(event) => {onCapture(event.target.files[0])}}/>
        <input ref={cameraRef} type="file" style={{ display: 'none' }} accept="image/*" capture="environment" onChange={(event) => {onCapture(event.target.files[0])}}/>
      </div>
      <FontAwesomeIcon className="close-button" icon="window-close" onClick={onClose} />
    </>
  );
};

export default UploadPopup;
