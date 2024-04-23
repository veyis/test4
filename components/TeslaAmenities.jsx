import React, { useState } from "react";
import { MdWifi, MdKitchen, MdOutlineWorkspacePremium } from "react-icons/md";
import { FaCar, FaChargingStation, FaTv, FaCamera } from "react-icons/fa";
import { IoMdSnow } from "react-icons/io";

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
      { icon: "🌄", label: "Garden view" }
  ],
  Bathroom: [
      { icon: "🛁", label: "Bathtub" },
      { icon: "💇‍♀️", label: "Hair dryer" },
      { icon: "🧼", label: "Cleaning products" },
      { icon: "🧴", label: "Ginger Lily Farms shampoo" },
      { icon: "🧴", label: "Ginger Lily Farms conditioner" },
      { icon: "🧴", label: "Ginger Lily Farms body soap" },
      { icon: "🚿", label: "Hot water" },
      { icon: "🧴", label: "Shower gel" }
  ],
  BedroomAndLaundry: [
      { icon: "🛏️", label: "Essentials (Towels, bed sheets, soap, toilet paper)" },
      { icon: "🧺", label: "Hangers" },
      { icon: "🛏️", label: "Bed linens" },
      { icon: "🛏️", label: "Clara Clark linens" },
      { icon: "🛏️", label: "Extra pillows and blankets" },
      { icon: "🪟", label: "Room-darkening shades" },
      { icon: "👗", label: "Iron" },
      { icon: "🚪", label: "Walk-in closet and closet" },
      { icon: "🧼", label: "Free washer – In unit" },
      { icon: "🧼", label: "Free dryer – In building" }
  ],
  Entertainment: [
      { icon: "📺", label: "65 inch HDTV with standard cable" }
  ],
  Family: [
      { icon: "🎲", label: "Board games" }
  ],
  HeatingAndCooling: [
      { icon: "❄️", label: "Central air conditioning" },
      { icon: "🌀", label: "Ceiling fan" },
      { icon: "🌬️", label: "Portable fans" },
      { icon: "🔥", label: "Central heating" }
  ],
  HomeSafety: [
      { icon: "🔊", label: "Noise decibel monitors on property" },
      { icon: "🎥", label: "Exterior security cameras on property" },
      { icon: "🚨", label: "Security system with sensors" },
      { icon: "🔥", label: "Smoke alarm" },
      { icon: "⚠️", label: "Carbon monoxide alarm" },
      { icon: "🧯", label: "Fire extinguisher" }
  ],
  InternetAndOffice: [
      { icon: "🌐", label: "Fast wifi – 416 Mbps" },
      { icon: "💼", label: "Dedicated workspace in a common space" }
  ],
  KitchenAndDining: [
      { icon: "🍳", label: "Kitchen" },
      { icon: "🍽️", label: "Dishes and silverware" },
      { icon: "🍴", label: "Cooking basics" },
      { icon: "🍷", label: "Wine glasses" },
      { icon: "☕", label: "Keurig coffee machine" },
      { icon: "🥘", label: "Whirlpool appliances (stove, oven)" },
      { icon: "🍴", label: "Barbecue utensils" },
      { icon: "🥘", label: "Baking sheet" }
  ],
  LocationFeatures: [
      { icon: "🚪", label: "Private entrance" }
  ],
  Outdoor: [
      { icon: "🌳", label: "Private backyard – Fully fenced" },
      { icon: "🪑", label: "Outdoor furniture" },
      { icon: "🍖", label: "BBQ grill: gas" },
      { icon: "🌳", label: "Private patio or balcony" },
      { icon: "🌳", label: "Outdoor dining area" }
  ],
  ParkingAndFacilities: [
      { icon: "🚗", label: "Free carport on premises" },
      { icon: "🚗", label: "Free street parking" },
      { icon: "🔌", label: "EV charger - level 2, Tesla only" }
  ],
  Services: [
      { icon: "📅", label: "Long term stays allowed" },
      { icon: "🔑", label: "Self check-in" },
      { icon: "🧹", label: "Cleaning available during stay" }
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
                      <div className="py-2" key={category}>
                          <h3 className="text-lg font-medium">{category}</h3>
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
