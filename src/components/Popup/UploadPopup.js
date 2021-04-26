import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CTA from "../Homepage/CTA";

const UploadPopup = ({ onClose, onCapture }) => {

  const browseRef = React.createRef();
  const cameraRef = React.createRef();

  const getDeviceType = () => {
    const userAgent = navigator.userAgent;

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
      return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
      return "mobile";
    }
    return "desktop";
  }

  const deviceType = getDeviceType();

  return (
    <>
      <div className="popup">
        <FontAwesomeIcon icon="images" />
        <CTA icon="folder-open" text="Browse" onClick={() => { browseRef.current.click() }} />
        {
          deviceType !== "desktop" ?
            <CTA icon="camera" text="Camera" onClick={() => { cameraRef.current.click() }} />
            :
            null
        }
        <input ref={browseRef} type="file" style={{ display: 'none' }} accept="image/*" onChange={(event) => { onCapture(event.target.files[0]) }} />
        <input ref={cameraRef} type="file" style={{ display: 'none' }} accept="image/*" capture="environment" onChange={(event) => { onCapture(event.target.files[0]) }} />
      </div>
      <FontAwesomeIcon className="close-button" icon="window-close" onClick={onClose} />
    </>
  );
};

export default UploadPopup;
