import React from "react";

const FooterLink = ({ link, linkTitle }) => {
  return (
    <div>
      <a className="footer-link" href={`${link}`}>
        {linkTitle}
      </a>
    </div>
  );
};

export default FooterLink;
