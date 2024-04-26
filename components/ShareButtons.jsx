'use client'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';
import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import {MdContentCopy} from 'react-icons/md';
import properties from '@/constants/properties';




const ShareButtons = ({ property }) => {

  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;
  const [copied, setCopied] = useState(false); // Initializing state for copied status

  const handleCopy = async () => {
    const path =`https://www.xperiencetheb.com/${window.location.pathname}` ;
    try {
      await navigator.clipboard.writeText(path);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };



  return (
    <>
      {/* <h3 className='text-xl font-bold text-center pt-2'>
        Share This Property:
      </h3> */}
      <div className='flex gap-3 justify-center pb-5'>
        <FacebookShareButton
          url={shareUrl}
          quote={property.name}
          hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}
        >
          <FacebookIcon size={36} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={property.name}
          hashtags={[`${property.type.replace(/\s/g, '')}ForRent`]}
        >
          <TwitterIcon size={36} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton
          url={shareUrl}
          title={property.name}
          separator=':: '
        >
          <WhatsappIcon size={36} round={true} />
        </WhatsappShareButton>

        {/* <EmailShareButton
          url={shareUrl}
          subject={property.name}
          body={`Check out this property listing: ${shareUrl}`}
        >
          <EmailIcon size={36} round={true} />
        </EmailShareButton> */}

<div onClick={handleCopy} style={{
          width: '36px', // Match icon sizes
          height: '36px', // Match icon sizes
          borderRadius: '50%', // Make it round
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white', // Background color similar to other icons
          cursor: 'pointer'
        }}>
          <MdContentCopy size={36} />
        </div>
        {copied && <p>Link copied!</p>}
      </div>
    </>
  );
};

export default ShareButtons;

