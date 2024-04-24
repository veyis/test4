import React, { useState } from "react";
import { MdWifi, MdKitchen, MdOutlineWorkspacePremium } from "react-icons/md";
import { FaCar, FaChargingStation, FaTv, FaCamera } from "react-icons/fa";
import { IoMdSnow } from "react-icons/io";

function splitAndCapitalize(text) {
    // Split the string at each point a new capital letter starts, and join with a space
    const result = text.replace(/([A-Z])/g, ' $1').trim();

    // Capitalize the first letter of the entire result and ensure the rest is lower case
    return result.charAt(0).toUpperCase() + result.slice(1);
}

// Modal component for displaying detailed amenities
const Modal = ({ children, onClose }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
			<div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-lg font-bold"
				>
					Close
				</button>
				{children}
			</div>
		</div>
	);
};

const amenities = {
  ScenicViews: [
      { icon: "🌄", label: "Garden view", category: "Scenic Views" },
  ],
  Bathroom: [
      { icon: "🛁", label: "Bathtub", category: "Bathroom" },
      { icon: "💇‍♀️", label: "Hair dryer",category: "Bathroom" },
      { icon: "🧼", label: "Cleaning products",category: "Bathroom" },
      { icon: "🧴", label: "Ginger Lily Farms shampoo",category: "Bathroom" },
      { icon: "🧴", label: "Ginger Lily Farms conditioner",category: "Bathroom" },
      { icon: "🧴", label: "Ginger Lily Farms body soap",category: "Bathroom" },
      { icon: "🚿", label: "Hot water",category: "Bathroom" },
      { icon: "🧴", label: "Shower gel",category: "Bathroom" }
  ],
  BedroomAndLaundry: [
      { icon: "🛏️", label: "Essentials (Towels, bed sheets, soap, toilet paper)",category: "Bedroom And Laundry" },
      { icon: "🧺", label: "Hangers",category: "Bedroom And Laundry" },
      { icon: "🛏️", label: "Bed linens",category: "Bedroom And Laundry" },
      { icon: "🛏️", label: "Clara Clark linens",category: "Bedroom And Laundry" },
      { icon: "🛏️", label: "Extra pillows and blankets",category: "Bedroom And Laundry" },
      { icon: "🪟", label: "Room-darkening shades",category: "Bedroom And Laundry" },
      { icon: "👗", label: "Iron",category: "Bedroom And Laundry" },
      { icon: "🚪", label: "Walk-in closet and closet",category: "Bedroom And Laundry" },
      { icon: "🧼", label: "Free washer – In unit",category: "Bedroom And Laundry" },
      { icon: "🧼", label: "Free dryer – In building",category: "Bedroom And Laundry" }
  ],
  Entertainment: [
      { icon: "📺", label: "65 inch HDTV with standard cable",category: "Entertainment" }
  ],
  Family: [
      { icon: "🎲", label: "Board games",category: "Family" }
  ],
  HeatingAndCooling: [
      { icon: "❄️", label: "Central air conditioning",category: "Heating And Cooling" },
      { icon: "🌀", label: "Ceiling fan",category: "Heating And Cooling" },
      { icon: "🌬️", label: "Portable fans",category: "Heating And Cooling" },
      { icon: "🔥", label: "Central heating",category: "Heating And Cooling" }
  ],
  HomeSafety: [
      { icon: "🔊", label: "Noise decibel monitors on property",category: "Home Safety" },
      { icon: "🎥", label: "Exterior security cameras on property",category: "Home Safety" },
      { icon: "🚨", label: "Security system with sensors",category: "Home Safety" },
      { icon: "🔥", label: "Smoke alarm",category: "Home Safety" },
      { icon: "⚠️", label: "Carbon monoxide alarm",category: "Home Safety" },
      { icon: "🧯", label: "Fire extinguisher",category: "Home Safety" }
  ],
  InternetAndOffice: [
      { icon: "🌐", label: "Fast wifi – 416 Mbps",category: "Internet And Office" },
      { icon: "💼", label: "Dedicated workspace in a common space",category: "Internet And Office" }
  ],
  KitchenAndDining: [
      { icon: "🍳", label: "Kitchen",category: "Kitchen And Dining" },
      { icon: "🍽️", label: "Dishes and silverware",category: "Kitchen And Dining" },
      { icon: "🍴", label: "Cooking basics",category: "Kitchen And Dining" },
      { icon: "🍷", label: "Wine glasses",category: "Kitchen And Dining" },
      { icon: "☕", label: "Keurig coffee machine",category: "Kitchen And Dining" },
      { icon: "🥘", label: "Whirlpool appliances (stove, oven)",category: "Kitchen And Dining" },
      { icon: "🍴", label: "Barbecue utensils",category: "Kitchen And Dining" },
      { icon: "🥘", label: "Baking sheet",category: "Kitchen And Dining" }
  ],
  LocationFeatures: [
      { icon: "🚪", label: "Private entrance",category: "Location Features" }
  ],
  Outdoor: [
      { icon: "🌳", label: "Private backyard – Fully fenced", category: "Outdoor" },
      { icon: "🪑", label: "Outdoor furniture", category: "Outdoor" },
      { icon: "🍖", label: "BBQ grill: gas", category: "Outdoor" },
      { icon: "🌳", label: "Private patio or balcony", category: "Outdoor" },
      { icon: "🌳", label: "Outdoor dining area", category: "Outdoor" }
  ],
  ParkingAndFacilities: [
      { icon: "🚗", label: "Free carport on premises", category: "Parking and Facilities" },
      { icon: "🚗", label: "Free street parking", category: "Parking and Facilities" },
      { icon: "🔌", label: "EV charger", category: "Parking and Facilities" }
  ],
  Services: [
      { icon: "📅", label: "Long term stays allowed", category: "Services" },
      { icon: "🔑", label: "Self check-in",category: "Services" },
      { icon: "🧹", label: "Cleaning available during stay",category: "Services" }
  ]
};



// Main component to display Tesla amenities with modal for detailed view
const TeslaAmenities = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const toggleModal = () => setModalOpen(!isModalOpen);

	return (
		<div className="max-w-4xl p-6">
			<h2 className="text-2xl font-semibold mb-4">Amenities</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
				{/* Short list of amenities */}
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
					EV charger - level 2, Tesla only
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
			<button
				onClick={toggleModal}
				className="bg-transparent border border-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
			>
				Show all amenities
			</button>

			{isModalOpen && (
	<Modal onClose={toggleModal}>
  <div className="modal-content max-h-[80vh] overflow-auto"> {/* Added class for scrolling */}
      <h2 className="text-xl font-bold mb-4">What this place offers?</h2>
      <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
         
              <div>
                  {Object.keys(amenities).map((category) => (
                      <div className="py-4" key={category}>
                          <h3 className="text-lg font-bold">{splitAndCapitalize(category)} </h3>
                          <ul className="mt-4 space-y-3">
                              {Array.isArray(amenities[category]) ? (
                                  amenities[category].map((item, index) => (
                                      <li key={index} className="flex items-center">
                                          <span className="text-2xl mr-3">{item.icon}</span>
                                          <span className="text-md">{item.label}</span>
                                      </li>
                                  ))
                              ) : (
                                  <li className="flex items-center">
                                      <span className="text-2xl mr-3">
                                          {amenities[category].icon}
                                      </span>
                                      <span className="text-md">
                                          {amenities[category].label}
                                      </span>
                                  </li>
                              )}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  </div>
</Modal>

			)}
		</div>
	);
};

export default TeslaAmenities;
