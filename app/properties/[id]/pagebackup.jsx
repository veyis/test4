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
import TeslaAmen from "@/components/TeslaAmen";
import TeslaMap1 from "@/components/TeslaMap1";

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
						<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
							<h1 className="text-2xl font-bold text-gray-700">
								<br />
								<p>★ Tesla House w/ Hot-Tub 3br/3bath 5min to Downtown</p>
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
									{[0, 2, 5, 13].map((i) => (
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
									<h1 className="text-2xl leading-6 font-medium text-gray-900">
										Entire home in San Antonio, Texas
									</h1>
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
									<span className="text-lg">
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

								<div className="max-w-md  p-4 bg-white shadow-lg rounded-lg flex items-start space-x-4">
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

								<div className="max-w-md  p-4 bg-white shadow-lg rounded-lg flex items-start space-x-4">
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

								<div class="max-w-4xl  p-6 bg-white shadow-lg rounded-lg">
									<h2 class="text-xl font-bold text-gray-800 mb-4">
										House for LONG TERM STAYS (minimum 30 days)
									</h2>
									<p class="text-gray-600">
										This unique 3 bed, 3 bath house has a style all its own
										combining local historical charm with a touch of modern
										flare. Centrally located in a historical district just a
										5-minute drive to downtown SATX, The Alamo, River Walk,
										Hemisfair Park, Alamodome, Pearl Brewery & the AT&T Center.
									</p>
									<ul class="list-disc list-inside mt-4 mb-4 text-gray-600">
										<li>Large back yard with BBQ</li>
										<li>
											Electric car charger available upon request (additional
											fee)
										</li>
										<li>Hot tub available upon request (additional fee)</li>
										<li>Not ADA accessible and has stairs</li>
									</ul>
									<div class="font-semibold text-gray-800 mb-2">The space</div>
									<p class="text-gray-600">
										House is warm and inviting with the living room, dining
										room, and kitchen connected in a flowing linear path on the
										right side of the house and two bedrooms separated by a
										large bathroom on the left side. At the back of the house is
										the Master bedroom with its own split system HVAC, in-suite
										bathroom and walk-in closet. Laundry room and 3rd bathroom
										are adjacent to the kitchen in the rear of the house.
										Ceilings are 11 feet high throughout the house giving a
										spacious feel to each of the rooms. A central HVAC system
										heats and cools the entire house. A soft water system
										provides water to all faucets in the house.
									</p>
									<div class="font-semibold text-gray-800 mb-2">
										Guest access
									</div>
									<ul class="list-disc list-inside text-gray-600">
										<li>
											The private, gated driveway is suitable for up to (3) cars
											parked in a single line.
										</li>
										<li>
											There is plenty of curb-side parking available in front of
											the property.
										</li>
										<li>
											House can accommodate up to 6 people maximum. The three
											bedrooms each have one queen sized bed.
										</li>
										<li>
											Kitchen is supplied with numerous amenities including
											cooking essentials, an air fryer, microwave, Keurig coffee
											maker, kettle, cookware to prepare meals, and food storage
											containers.
										</li>
										<li>
											Front loading washer and dryer with top loading for small
											loads.
										</li>
										<li>
											Security is provided with 24/7 professionally monitored
											camera surveillance. NO cameras are located inside the
											house.
										</li>
										<li>
											Electric car charger: Gen 3 Tesla wall charger & a J1772
											compatible charging adapter for other electric vehicles.
										</li>
									</ul>
									<div class="mt-4">
										<span class="font-semibold text-gray-800">CHECK-IN:</span>{" "}
										4:00 pm <br />
										<span class="font-semibold text-gray-800">
											CHECK-OUT:
										</span>{" "}
										10:00 am
									</div>
								</div>

                <div class="max-w-4xl  p-6 bg-white shadow-lg rounded-lg">
  
{/*    
    <Amenities amenities={property.amenities} /> */}

    <TeslaAmen />
    <TeslaMap1 />

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
										<h2 className="text-lg leading-6 font-medium text-gray-900">
											Stunning Beach House
										</h2>
										<p className="mt-1 max-w-2xl text-sm text-gray-500">
											One of the most loved homes on Airbnb, rated 4.81 out of 5
											stars from 42 reviews. Great for remote work with fast
											wifi at 416 Mbps and a dedicated workspace. Hosted by
											Aleksandra, a Superhost for 2 years. Self check-in with a
											keypad.
										</p>
									</div>
									<div className="border-t border-gray-200">
										<dl>
											{/* More detailed information */}
											<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt className="text-sm font-medium text-gray-500">
													Guests
												</dt>
												<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
													Up to 6 people
												</dd>
											</div>
											<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt className="text-sm font-medium text-gray-500">
													Amenities
												</dt>
												<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
													Electric car charger, BBQ, hot tub (on request,
													additional fee)
												</dd>
											</div>
											<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt className="text-sm font-medium text-gray-500">
													Accessibility
												</dt>
												<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
													Not ADA accessible, has stairs
												</dd>
											</div>
											<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt className="text-sm font-medium text-gray-500">
													Location
												</dt>
												<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
													Centrally located in a historical district, 5-min
													drive to downtown SATX
												</dd>
											</div>
										</dl>
									</div>
								</div>

								<div className="container m-auto py-10 px-6">
									<div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
										<PropertyDetails property={property} />
										<aside className="space-y-4">
											<BookmarkButton property={property} />
											<ShareButtons property={property} />
											<PropertyContactForm property={property} />
										</aside>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="bg-blue-50">
						<div className="container m-auto py-10 px-6">
							<div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
								<PropertyDetails property={property} />
								<aside className="space-y-4">
									<BookmarkButton property={property} />
									<ShareButtons property={property} />
									<PropertyContactForm property={property} />
								</aside>
							</div>
						</div>
					</section>
				</>
			)}
		</>
	);
};
export default PropertyPage;
