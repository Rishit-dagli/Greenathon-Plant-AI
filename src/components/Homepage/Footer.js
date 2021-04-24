import React from "react";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className="footer">
      <div className="link-group">
        <h1 className="linkgroup-title">Link Group 1</h1>
        <FooterLink linkTitle="Link Title" link="#" />
        <FooterLink linkTitle="Link Title" link="#" />
        <FooterLink linkTitle="Link Title" link="#" />
      </div>
      <div className="link-group">
        <h1 className="linkgroup-title">Link Group 1</h1>
        <FooterLink linkTitle="Link Title" link="#" />
        <FooterLink linkTitle="Link Title" link="#" />
        <FooterLink linkTitle="Link Title" link="#" />
      </div>
      <div className="link-group">
        <h1 className="linkgroup-title">Link Group 1</h1>
        <FooterLink linkTitle="Link Title" link="#" />
        <FooterLink linkTitle="Link Title" link="#" />
        <FooterLink linkTitle="Link Title" link="#" />
      </div>
    </div>
    
  );
};

export default Footer;
