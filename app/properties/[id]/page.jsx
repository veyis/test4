"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";
import BookmarkButton from "@/components/BookmarkButton";
import PropertyContactForm from "@/components/PropertyContactForm";
import ShareButtons from "@/components/ShareButtons";
import Spinner from "@/components/Spinner";
import propertiesData from "@/constants/properties";
import { MdWifi } from "react-icons/md"; // Corrected icon import
import { MdKeyboard } from "react-icons/md"; // Importing a keyboard icon which can symbolize a keypad
import Amenities from "@/components/Amenities";
import TeslaMap1 from "@/components/TeslaMap1";
import ThingsToKnow from "@/components/ThingsToKnow";
import TeslaAmenities from "@/components/TeslaAmenities";

import AboutYourStay from "@/components/AboutYourStay";

import {
	FaUsers,
	FaBed,
	FaBath,
	FaRulerCombined,
	FaMoneyBill,
	FaMapMarker,
} from "react-icons/fa";
import Image from "next/image";

const PropertyPage = () => {
	const { id } = useParams();

	const [property, setProperty] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!id) return;

		// Find the property by id in the imported properties data
		const fetchedProperty = propertiesData.find((p) => p.id === id); // Ensure your property objects have an 'id' field

		if (fetchedProperty) {
			setProperty(fetchedProperty);
		} else {
			console.error("Property not found");
		}

		setLoading(false);
	}, [id]);

	if (!property && !loading) {
		return (
			<h1 className="text-center text-2xl font-bold mt-10">
				Property Not Found
			</h1>
		);
	}

	return (
		<>
			{loading && <Spinner loading={loading} />}
			{!loading && property && (
				<>
					{/* <PropertyHeaderImage image={property.images[0]} /> */}
					<section>
						<div className="sm:px-6 lg:px-8">
							<h1 className="text-2xl font-bold text-gray-700">
								<br />
								<p className="px-2">★ Tesla House w/ Hot-Tub 3br/3bath 5min to Downtown</p>
								<br />
							</h1>
							{/* Image Gallery */}
							<div className="flex flex-wrap   bg-white shadow overflow-hidden sm:rounded-lg">
								{/* Large Image */}
								<div className="w-1/2">
									<Image
										src="/images/properties/tesla0.jpg"
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
									{[1, 2, 5, 13].map((i) => (
										<div key={i} className="relative w-full h-full">
											<Image
												src={`/images/properties/tesla${i}.jpg`}
												alt={`Property Image ${i}`}
												layout="fill"
												objectFit="cover"
												className="px-0"
											/>
										</div>
									))}
									<Link
										href="/properties/photos"
										className="absolute bottom-0 right-0 p-1 m-2 bg-gray-100 text-gray-800 rounded-lg"
									>
										Show all photos
									</Link>
								</div>
							</div>

							{/* Property Details */}
							<div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg ">
								<div className="px-4 py-5 sm:px-6 ">
									<h2 className="text-2xl leading-6 font-medium text-gray-900">
										Entire home in San Antonio, Texas
									</h2>
									<br />

									<div className="flex gap-4 text-gray-500 mb-4">
										<p>
											<FaUsers className="inline mr-2" /> 6{" "}
											<span className="md:hidden lg:inline">Max</span>
										</p>
										<p>
											<FaBed className="inline mr-2" /> 3{" "}
											<span className="md:hidden lg:inline">Beds</span>
										</p>
										<p>
											<FaBath className="inline mr-2" />3{" "}
											<span className="md:hidden lg:inline">Baths</span>
										</p>
										<p>
											<FaRulerCombined className="inline mr-2" />
											1884 <span className="md:hidden lg:inline">sqft</span>
										</p>
									</div>
								</div>

								<div className="border-t border-gray-200 rounded-lg flex flex-1">
									<Image
										src="/images/review1.png"
										alt="Property Image"
										width={50}
										height={50}
										className="rounded-lg"
									/>
									<span className="text-lg text-gray-800 py-1 px-2">
										{" "}
										One of the most loved homes on Airbnb <br />
										based on ratings, reviews, and reliability.
									</span>{" "}
									<Image
										src="/images/review2.png"
										alt="Property Image"
										width={50}
										height={50}
										className="rounded-lg"
									/>
								</div>

								<div className="max-w-md  p-4 flex items-start space-x-4">
									<MdWifi className="w-8 h-8 text-blue-500" />{" "}
									{/* Wi-Fi icon component */}
									<div className="flex flex-col">
										<span className="font-semibold text-gray-900">
											Great for remote work
										</span>
										<span className="text-gray-600 text-sm">
											Fast wifi at 416 Mbps, plus a dedicated workspace in a
											common area.
										</span>
									</div>
								</div>

								<div className="max-w-md  p-4 flex items-start space-x-4">
									<MdKeyboard className="w-8 h-8 text-blue-500" />{" "}
									{/* Keyboard icon as a placeholder for a keypad */}
									<div className="flex flex-col">
										<span className="font-semibold text-gray-900">
											Self check-in
										</span>
										<span className="text-gray-600 text-sm">
											Check yourself in with the keypad.
										</span>
									</div>
								</div>

								<div class="bg-white text-gray-900  p-6">
									<h1 class="text-2xl font-bold uppercase mb-4">
										About the House
									</h1>

									<div class="space-y-4">
										<p>
											Tesla House is a single story 3-bed 3-bath craftsman
											bungalow exuding warmth and grandeur with its 11’ high
											ceilings, natural wood finishes, and inviting open floor
											plan. Situated just east of downtown San Antonio in the
											charming Dignowity Hill historic district, known for its
											rich architectural heritage and vibrant community spirit.
										</p>
										<p>
											House is not ADA accessible, has stairs and stone walking
											paths.
										</p>

										<div className="p-0">
											<div>
												<h4 className="text-md font-semibold py-0">
													Long Term Stays :{" "}
													<span className="font-light">Minimum 30 days</span>
												</h4>
											</div>

											<div>
												<h2 class="text-md font-semibold py-0">
													Short Term Stays :{" "}
													<span className="font-light">Minimum 2 days</span>{" "}
												</h2>
											</div>
										</div>

										<div>
											<h2 class="text-2xl font-semibold py-2">The Space</h2>
											<p className="py-1">
												House is warm and inviting with the living room, dining
												room and kitchen connected in a flowing linear path,
												creating a spacious yet intimate area perfect for
												socializing and gatherings. Adjacent to the dining area
												are two bedrooms and bathroom featuring a double vanity.
												Each bedroom boasts a queen-sized bed for your comfort.
												Towards the rear end of the house, discover master
												bedroom, complete with a queen-sized bed, its own split
												system HVAC ensuring personalized comfort, an en-suite
												bathroom, and a walk-in closet. The laundry room and an
												additional bathroom are conveniently situated nearby,
												adjacent to the kitchen.
											</p>
										</div>

										<p>
											Throughout the home, central air HVAC ensures optimal
											climate control, while a soft water system ensures quality
											water flow from every faucet. The refrigerator is equipped
											with a filtered water dispenser and an LCD entertainment
											screen.
										</p>
										<p>
											Outside, the large backyard offers privacy with its tall
											fence, featuring a patio equipped with misters for hot
											days, a hot tub, and a BBQ grill.
										</p>
									</div>
								</div>

								<div className="bg-gray-50 p-4">
									<h2 className="text-lg font-semibold text-gray-900 mb-6">
										Where You'll Sleep?
									</h2>
									<div className="flex gap-4">
										{/* Bedroom 1 */}
										<div className="flex flex-col items-center bg-white p-4 rounded-lg shadow">
											<FaBed className="text-2xl mb-2" />
											<h3 className="font-semibold">Bedroom 1</h3>
											<p>Queen Bed</p>
										</div>

										{/* Bedroom 2 */}
										<div className="flex flex-col items-center bg-white p-4 rounded-lg shadow">
											<FaBed className="text-2xl mb-2" />
											<h3 className="font-semibold">Bedroom 2</h3>
											<p>Queen Bed</p>
										</div>

										{/* Bedroom 3 */}
										<div className="flex flex-col items-center bg-white p-4 rounded-lg shadow">
											<FaBed className="text-2xl mb-2" />
											<h3 className="font-semibold">Bedroom 3</h3>
											<p>Queen Bed</p>
										</div>
									</div>
								</div>

								<TeslaAmenities />
								<AboutYourStay />



							 <TeslaMap1 />
									<ThingsToKnow /> 
							</div>
						</div>
					</section>
				</>
			)}
		</>
	);
};
export default PropertyPage;
