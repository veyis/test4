import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-end space-x-4">
        <a href="https://www.facebook.com/XperienceTheB" aria-label="Facebook" className="flex items-center">
          <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" /> <span className="ml-2"> </span>
        </a>
        <a href="https://twitter.com/XperienceTheB" aria-label="Twitter" className="flex items-center">
          <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" /> <span className="ml-2"> </span>
        </a>
        <a href="https://www.instagram.com/XperienceTheB" aria-label="Instagram" className="flex items-center">
          <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" /> <span className="ml-2"> </span>
        </a>
      </div>
    );
  };
  

export default SocialMediaIcons;
