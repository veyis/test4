import React from 'react'
import { MdWifi } from "react-icons/md";
import { FaCar, FaChargingStation, FaTv, FaSink, FaCamera } from 'react-icons/fa';
import { MdKitchen, MdOutlineWorkspacePremium } from 'react-icons/md';
import { IoMdSnow } from 'react-icons/io';


const TeslaAmenities = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <MdWifi className="text-xl mr-2" />
          Fast wifi – 416 Mbps
        </div>
        <div className="flex items-center">
          <MdKitchen className="text-xl mr-2" />
          Kitchen
        </div>
        <div className="flex items-center">
          <FaCar className="text-xl mr-2" />
          Free carport on premises
        </div>
        <div className="flex items-center">
          <MdOutlineWorkspacePremium className="text-xl mr-2" />
          Dedicated workspace
        </div>
        <div className="flex items-center">
          <FaChargingStation className="text-xl mr-2" />
          EV charger - level 2, tesla only
        </div>
        <div className="flex items-center">
          <FaTv className="text-xl mr-2" />
          65" HDTV with standard cable
        </div>
        <div className="flex items-center">
          <IoMdSnow className="text-xl mr-2" />
          Free dryer – In building
        </div>
        <div className="flex items-center">
          <FaCamera className="text-xl mr-2" />
          Security cameras on property
        </div>
      </div>
      <button className="bg-transparent border border-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
        Show all amenities
      </button>


      {/* More amenities list can go here */}
    </div>
  );
}
export default TeslaAmenities




