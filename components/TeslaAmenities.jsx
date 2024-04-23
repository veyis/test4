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
		{ icon: "🌄", label: "Garden view" },
	],
	Bathroom: [
		{ icon: "🛁", label: "Bathtub" },
		{ icon: "💇‍♀️", label: "Hair dryer" },
		{ icon: "🧼", label: "Cleaning products" },
		{ icon: "🧴", label: "Ginger Lily Farms shampoo" },
		{ icon: "🧴", label: "Ginger Lily Farms conditioner" },
		{ icon: "🧴", label: "Ginger Lily Farms body soap" },
		{ icon: "🚿", label: "Hot water" },
		{ icon: "🧴", label: "Shower gel" },
	],
	Bedroom: [
		{ icon: "🛏️", label: "Queen bed" },
		{ icon: "🛏️", label: "Extra pillows and blankets" },
		{ icon: "🧺", label: "Walk-in closet" },
		{ icon: "🧺", label: "Closet" },
		{ icon: "🪟", label: "Room-darkening shades" },
	],
	Kitchen: [
		{ icon: "🍽️", label: "Dishwasher" },
		{ icon: "🥄", label: "Cooking basics" },
		{ icon: "🥣", label: "Dishes and silverware" },
		{ icon: "☕", label: "Coffee maker: Keurig" },
		{ icon: "🍷", label: "Wine glasses" },
		{ icon: "🍳", label: "Pots and pans" },
		{ icon: "🥘", label: "Whirlpool stainless steel stove" },
		{ icon: "🍪", label: "Baking sheet" },
		{ icon: "🔥", label: "Barbecue utensils" },
	],
	LivingRoom: [
		{ icon: "🛋️", label: "Living room" },
		{ icon: "📺", label: "65 inch HDTV with standard cable" },
		{ icon: "🎮", label: "Board games" },
	],
	LaundryRoom: [
		{ icon: "🧺", label: "Washer" },
		{ icon: "🧺", label: "Dryer" },
		{ icon: "🧼", label: "Iron" },
	],
	Outside: [
		{ icon: "🌳", label: "Patio or balcony" },
		{ icon: "🏞️", label: "Private backyard" },
		{ icon: "🍖", label: "BBQ grill" },
	],
	Other: [
		{ icon: "🚗", label: "Free parking on premises" },
		{ icon: "🔌", label: "EV charger - level 2, tesla only" },
		{ icon: "🔒", label: "Security cameras" },
		{ icon: "🔊", label: "Noise decibel monitors" },
		{ icon: "🌐", label: "Fast wifi – 416 Mbps" },
		{ icon: "🖥️", label: "Dedicated workspace" },
		{ icon: "🧹", label: "Cleaning available during stay" },
		{ icon: "🔥", label: "Central heating" },
		{ icon: "❄️", label: "Central air conditioning" },
		{ icon: "🔥", label: "Fire extinguisher" },
		{ icon: "⏱️", label: "Long term stays allowed" },
	],
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
      <h2 className="text-xl font-bold mb-4">What this place offers</h2>
      <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
         
              <div>
                  {Object.keys(amenities).map((category) => (
                      <div key={category}>
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
