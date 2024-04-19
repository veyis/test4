import React from 'react'
import PhotoGallery from '@/components/PhotoGallery';

const photos = () => {
    const photos = [
        { id: 1, url: '/images/properties/tesla0.jpg', alt: 'Photo 1', description: 'Tesla House 1, San Antonio  ' },
        { id: 2, url: '/images/properties/tesla1.jpg', alt: 'Photo 2', description: 'Tesla House 2, San Antonio  ' },
        { id: 3, url: '/images/properties/tesla2.jpg', alt: 'Photo 3', description: 'Tesla House 3, San Antonio  ' },
        { id: 4, url: '/images/properties/tesla3.jpg', alt: 'Photo 4', description: 'Tesla House 4, San Antonio  ' },
        { id: 5, url: '/images/properties/tesla4.jpg', alt: 'Photo 5', description: 'Tesla House 5, San Antonio  ' },
        { id: 6, url: '/images/properties/tesla5.jpg', alt: 'Photo 6', description: 'Tesla House 6, San Antonio  ' },
        { id: 7, url: '/images/properties/tesla6.jpg', alt: 'Photo 7', description: 'Tesla House 7, San Antonio  ' },
        { id: 8, url: '/images/properties/tesla7.jpg', alt: 'Photo 8', description: 'Tesla House 8, San Antonio  ' },
        { id: 9, url: '/images/properties/tesla8.jpg', alt: 'Photo 9', description: 'Tesla House 9, San Antonio  ' },
        { id: 10, url: '/images/properties/tesla9.jpg', alt: 'Photo 10', description: 'Tesla House 10, San Antonio  '},
        { id: 11, url: '/images/properties/tesla10.jpg', alt: 'Photo 11', description: 'Tesla House 11, San Antonio '},
        { id: 12, url: '/images/properties/tesla11.jpg', alt: 'Photo 12', description: 'Tesla House 12, San Antonio  '},
        { id: 13, url: '/images/properties/tesla12.jpg', alt: 'Photo 13', description: 'Tesla House 13, San Antonio  '},
        { id: 14, url: '/images/properties/tesla13.jpg', alt: 'Photo 14', description: 'Tesla House 14, San Antonio  '},
        { id: 15, url: '/images/properties/tesla14.jpg', alt: 'Photo 15', description: 'Tesla House 15, San Antonio  '},
        { id: 16, url: '/images/properties/tesla15.jpg', alt: 'Photo 16', description: 'Tesla House 16, San Antonio  '},
        { id: 17, url: '/images/properties/tesla16.jpg', alt: 'Photo 17', description: 'Tesla House 17, San Antonio  '},
     
        
        
      ];

  return (
   
<div className="container mx-auto px-4">
      <h1 className="text-center text-4xl font-bold my-8">Photo Portfolio</h1>
      <PhotoGallery photos={photos} />
    </div>
  )
}

export default photos