import Image from 'next/image'
import Link from 'next/link'
import {
    FaUsers,
    FaBed,
    FaBath,
    FaRulerCombined,
    FaMoneyBill,
    FaMapMarker,
  } from 'react-icons/fa';

  import PhotoGallery from '@/components/PhotoGallery';

const page = () => {

    
return (
<div className="bg-white">
      {/* Header
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-700">
          ★ Tesla House w/ Hot-Tub 3br/3bath 5min to Downtown
          </h1>
        </div>
      </header> */}

      {/* Property Section */}
      <main className="my-8">
        
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-700">
            <p>
            ★ Tesla House w/ Hot-Tub 3br/3bath 5min to Downtown
            </p>
        <br />
          </h1>
          {/* Image Gallery */}
          <div className="flex flex-wrap   bg-white shadow overflow-hidden sm:rounded-lg">
            {/* Large Image */}
            <div className="w-1/2">
              <Image
                src="/images/properties/s0.webp"
                alt="Large Property Image"
                width={800}
                height={600}
                layout="responsive"
                objectFit="cover"
                className="gap-1 px-1"
                radius="rounded-lg"
              />
            </div>
            {/* Small Images */}
            <div className="w-1/2 grid grid-rows-2 grid-cols-2 gap-1 p-0 relative">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="relative w-full h-full">
                                    <Image
                                        src={`/images/properties/s${i}.jpeg`}
                                        alt={`Property Image ${i}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="px-0"
                                    />
                                </div>
                            ))}
                            <Link href="/properties/photos"
                            className="absolute bottom-0 right-0 p-1 m-2 bg-gray-100 text-gray-800 rounded-lg">
                                Show all photos
                            
                            </Link>
                        </div>
                    </div>

          {/* Property Details */}
          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Entire home in San Antonio, Texas

</h2>
<br />

<div className='flex gap-4 text-gray-500 mb-4'>
        <p>
            <FaUsers className='inline mr-2' /> 6 {' '}
            <span className='md:hidden lg:inline'>Max</span>
          </p>
          <p>
            <FaBed className='inline mr-2' /> 3{' '}
            <span className='md:hidden lg:inline'>Beds</span>
          </p>
          <p>
            <FaBath className='inline mr-2' />
            3 <span className='md:hidden lg:inline'>Baths</span>
          </p>
          <p>
            <FaRulerCombined className='inline mr-2' />
            1500 {' '}
            <span className='md:hidden lg:inline'>sqft</span>
          </p>
        </div>

              <p className="mt-1 max-w-2xl text-sm text-gray-500">6 guests 3 bedrooms 3 beds 3 baths</p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {/* Guests */}
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Guests
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    4
                  </dd>
                </div>
                {/* Bedrooms */}
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Bedrooms
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    2
                  </dd>
                </div>
                {/* Bathrooms */}
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Bathrooms
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    1.5
                  </dd>
                </div>
              </dl>
            </div>

             {/* Property Details with extended info */}
             <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h2 className="text-lg leading-6 font-medium text-gray-900">Stunning Beach House</h2>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                One of the most loved homes on Airbnb, rated 4.81 out of 5 stars from 42 reviews. 
                                Great for remote work with fast wifi at 416 Mbps and a dedicated workspace. 
                                Hosted by Aleksandra, a Superhost for 2 years. Self check-in with a keypad.
                            </p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                {/* More detailed information */}
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Guests</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Up to 6 people</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Amenities</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Electric car charger, BBQ, hot tub (on request, additional fee)
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Accessibility</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Not ADA accessible, has stairs
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Centrally located in a historical district, 5-min drive to downtown SATX
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
            </div>
            </div>




            </main>
            </div>



        
       
    )
                                
}

export default page