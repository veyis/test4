import React from 'react'
import PhotoGallery from '@/components/PhotoGallery';

const photos = () => {
    const photos = [
        { id: 1, url: '/images/properties/s1.jpeg', alt: 'Photo 1', description: 'Description of Photo 1' },
        { id: 2, url: '/images/properties/s2.jpeg', alt: 'Photo 2', description: 'Description of Photo 2' },
        { id: 3, url: '/images/properties/s3.jpeg', alt: 'Photo 3', description: 'Description of Photo 3' },
        { id: 4, url: '/images/properties/s4.jpeg', alt: 'Photo 4', description: 'Description of Photo 4'}
      ];

  return (
   
<div className="container mx-auto px-4">
      <h1 className="text-center text-4xl font-bold my-8">Photo Portfolio</h1>
      <PhotoGallery photos={photos} />
    </div>
  )
}

export default photos