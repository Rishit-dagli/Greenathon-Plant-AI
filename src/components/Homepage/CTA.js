import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CTA = ({icon, text, onClick}) => {
    return (
        <div className="cta" onClick={onClick}>
            <FontAwesomeIcon icon={`${icon}`} />
            <p>{text}</p>
        </div>
    )
}

export default CTA;