import Image from 'next/image';
import React from 'react';

function PhotoGallery({ photos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {photos.map(photo => (
        <div key={photo.id} className="relative">
          <Image
            src={photo.url}
            alt={photo.alt}
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full rounded-b-lg">
             {photo.description} 
             
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
