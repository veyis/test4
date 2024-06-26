import React from 'react'
import Link from 'next/link';
import PhotoGallery from '@/components/PhotoGallery';

const photos = () => {
    const photos = [
        { id: 1, url: '/images/properties/th1.jpg', alt: 'Photo 1', description: 'Welcome in "Tesla House" in San Antonio ' },
        { id: 2, url: '/images/properties/th2.jpg', alt: 'Photo 2', description: 'Living Room ' },
        { id: 3, url: '/images/properties/th3.jpg', alt: 'Photo 3', description: 'Living Room  ' },
        { id: 4, url: '/images/properties/th4.jpg', alt: 'Photo 4', description: 'Master Bedroom  ' },
        { id: 5, url: '/images/properties/th5.jpg', alt: 'Photo 5', description: 'Master Bedroom  ' },
        { id: 7, url: '/images/properties/th7.jpg', alt: 'Photo 7', description: 'Master Bathroom  ' },
       
        { id: 8, url: '/images/properties/th8.jpg', alt: 'Photo 8', description: 'Kitchen  ' },
        { id: 9, url: '/images/properties/th9.jpg', alt: 'Photo 9', description: 'Kitchen  ' },
        { id: 10, url: '/images/properties/th10.jpg', alt: 'Photo 10', description: 'Kitchen  '},
        { id: 11, url: '/images/properties/th11.jpg', alt: 'Photo 11', description: 'Living Room '},
        { id: 12, url: '/images/properties/th12.jpg', alt: 'Photo 12', description: 'Bathroom  '},  
    
        { id: 13, url: '/images/properties/th13.jpg', alt: 'Photo 13', description: 'Bedroom 1  '},
        { id: 14, url: '/images/properties/th14.jpg', alt: 'Photo 14', description: 'Bedroom 2 '},

        { id: 16, url: '/images/properties/th16.jpg', alt: 'Photo 15', description: 'Backyard  '},
        { id: 17, url: '/images/properties/th17.jpg', alt: 'Photo 16', description: 'Backyard  '},
        { id: 18, url: '/images/properties/th18.jpg', alt: 'Photo 17', description: 'Backyard  '},
        
        { id: 19, url: '/images/properties/th19.jpg', alt: 'Photo 17', description: 'EV Car Charger  '},
     
       
        // { id: 6, url: '/images/properties/th6.jpg', alt: 'Photo 6', description: 'Master Bathroom  ' },
        { id: 15, url: '/images/properties/th15.jpg', alt: 'Photo 1', description: 'Laundry  ' },
     
        
      ];

  return (
<>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl font-bold my-8">All Photos</h1>
        <div className="m-2">
            <Link href="/properties/1" className="text-lg text-blue-600 hover:underline flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
            </Link>
        </div>
        <PhotoGallery photos={photos} />
    </div>
</>


  )
}

export default photos