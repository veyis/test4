'use client';
import React, { useState } from 'react';
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
import copy from 'copy-to-clipboard';

const ShareButtons = ({ property }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;

  const handleCopyUrl = () => {
    copy(shareUrl);
    alert("URL copied to clipboard!");
  };

  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
        Share This Property:
      </h3>
      <div className='flex gap-3 justify-center pb-5'>
        <FacebookShareButton
          url={shareUrl}
          quote={property.name}
          hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={property.name}
          hashtags={[`${property.type.replace(/\s/g, '')}ForRent`]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton
          url={shareUrl}
          title={property.name}
          separator=':: '
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <EmailShareButton
          url={shareUrl}
          subject={property.name}
          body={`Check out this property listing: ${shareUrl}`}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const property = {
    _id: '123',
    name: 'Beautiful Home',
    type: 'House'
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Share Property</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <ShareButtons property={property} />
      </Modal>
    </div>
  );
};

export default App;
