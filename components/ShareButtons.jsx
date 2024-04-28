'use client'
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
import { MdContentCopy } from 'react-icons/md';


const ShareButtons = ({ property }) => {
  console.log(property);
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property.id}`;
  const [copied, setCopied] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCopy = async () => {
    const path = `https://www.xperiencetheb.com/${window.location.pathname}`;
    try {
      await navigator.clipboard.writeText(path);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="btn-open-modal">Share This Property</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Share Modal">
        <h2>Share This Property</h2>
        <button onClick={closeModal}>Close</button>
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
          <div onClick={handleCopy} style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            <MdContentCopy size={36} />
          </div>
          {copied && <p>Link copied!</p>}
        </div>
      </Modal>
    </>
  );
};

export default ShareButtons;
