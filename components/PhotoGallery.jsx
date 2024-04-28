'use client'
import React, { useState, useEffect } from 'react';

function Modal({ photo, onClose, onNext, onPrev }) {
  if (!photo) return null;

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      onNext();
    } else if (event.key === 'ArrowLeft') {
      onPrev();
    } else if (event.key === 'Escape') {
      onClose();
    }
  };

  // Add event listener when the component mounts and remove on unmount
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrev, onClose]); // Include dependencies to handle updates

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-4 rounded-lg max-w-screen-xl max-h-full overflow-auto relative">
        <button onClick={onPrev} aria-label="Previous" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white z-60">&#10094;</button>
        <img
          src={photo.url}
          alt={photo.alt}
          className="object-contain w-full max-h-[80vh] mx-auto"
        />
        <p className="text-center p-4">{photo.description}</p>
        <button onClick={onClose} aria-label="Close" className="absolute top-0 right-0 m-2 text-xl bg-white p-1 rounded-full z-60">&times;</button>
        <button onClick={onNext} aria-label="Next" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white z-60">&#10095;</button>
      </div>
    </div>
  );
}

function PhotoGallery({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePhotoClick = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setCurrentIndex(null);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
      {modalOpen && currentIndex !== null && <Modal photo={photos[currentIndex]} onClose={handleClose} onNext={handleNext} onPrev={handlePrev} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {photos.map((photo, index) => (
          <div key={photo.id} className="relative cursor-pointer" onClick={() => handlePhotoClick(index)}>
            <img
              src={photo.url}
              alt={photo.alt}
              className="object-cover w-full h-72 sm:h-80 md:h-96 rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full rounded-b-lg">
              {photo.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PhotoGallery;
