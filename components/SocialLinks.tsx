import React, { useState } from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SocialLinks = () => {

  const [copied, setCopied] = useState(false);
 


  const handleCopy = () => {
    navigator.clipboard.writeText("sabrimariem1025@gmail.com");
    setCopied(true);

    setTimeout(() => setCopied(false), 2000); // Reviens à "Copy my email" après 2s
  };
  return (
    <div className="btn-wrapper text-lg">
    
      {socialLinks.email && (
        
<Button
  className="bg-transparent border-0 shadow-none text-black hover:bg-transparent focus:outline-none focus:ring-0"
  aria-label="Copy Email"
  onClick={handleCopy}
>
  <span className="btn-inner--icon">
    <i className="fa fa-envelope" /> {copied ? "Email is copied" : "Copy my email"}
  </span>
</Button>

      )}
  
    
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-linkedin" />
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" />
          </span>
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-instagram" />
          </span>
        </Button>
      )}
      {socialLinks.facebook && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="facebook"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-facebook-square" />
          </span>
        </Button>
      )}
      {socialLinks.twitter && (
        <Button
          className="btn-icon-only rounded-circle"
          color="twitter"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-twitter" /> 
          </span>
        </Button>
      )}
       {copied && (
      <img
        src="/img/icons/common/confetti.gif"
        alt="Email Copied"
        style={{
          position: "absolute",
          top: "40%", 
          left: "20%",
          transform: "translateX(-50%)",
          width: "250px",
          pointerEvents: "none",
        }}
      />
    )}
    </div>
  );
};

export default SocialLinks;
