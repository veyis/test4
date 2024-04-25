'use client'
import React, { useState } from 'react';

function Modal({ photo, onClose, onNext, onPrev }) {
  if (!photo) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      {/* Adjusted width for modal container */}
      <div className="bg-white p-4 rounded-lg max-w-screen-xl h-96 overflow-hidden relative">
        <button onClick={onPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white z-60">&#10094;</button>
        {/* Adjusted image CSS to fit the container */}
        <img
          src={photo.url}
          alt={photo.alt}
          className="object-fit-contain w-full h-full"
        />
        <p className="text-center p-4">{photo.description}</p>
        <button onClick={onClose} className="absolute top-0 right-0 m-2 text-xl bg-white p-1 rounded-full z-60">&times;</button>
        <button onClick={onNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white z-60">&#10095;</button>
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
            {/* Adjusted image CSS to fit the container */}
            <img
              src={photo.url}
              alt={photo.alt}
              className="object-fit-cover w-full h-72 sm:h-80 md:h-96 rounded-lg shadow-lg"
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
