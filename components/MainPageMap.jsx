import Image from "next/image";

const MainPageMap = () => {
	return (
		<div className="container mx-auto p-4">
			{/* Grid container with responsive columns */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg">
				{/* Image column for all sizes, spans one column on medium devices */}
				<div className="md:col-span-1 bg-white p-2 rounded-lg">
					<Image
						src="/map.jpg"
						alt="Descriptive Image Alt Text"
						width={400}
						height={400}
						objectFit="contain" // Ensures the image scales down to fit within the bounds of the container without distortion or cropping
					/>
				</div>

				{/* Text content column, spans two columns on medium devices */}
				<div className="md:col-span-2 bg-white p-6 rounded-lg flex flex-col justify-center">
					<p className="py-1">
						Whether you find yourself in San Antonio for business, leisure, a
						special event, or in need of temporary housing during relocation,
						our accommodations are designed to provide the ideal fusion of
						convenience and relaxation.
					</p>
					<p className="py-1">
						Live in complete comfort within a fully furnished home, boasting
						contemporary luxuries, just a short drive or stroll away from
						shopping, dining, and the vibrant downtown scene.
					</p>
					<p className="py-1">
						With San Antonio's myriad of attractions at your fingertips, we
						extend our invitation for you to stay in ”Tesla House” and fully
						experience the beauty of this remarkable city.
					</p>

					<h3 className="text-md font-semibold text-gray-800 mb-1 py-3">
						Distances from San Antonio
					</h3>
					<ul className="text-md font-medium text-gray-800 list-disc list-inside py-0">
						<li>
							Austin: <strong>70 miles</strong>
						</li>
						<li>
							Corpus Christi: <strong>140 miles</strong>
						</li>
						<li>
							Houston: <strong>190 miles</strong>
						</li>
						<li>
							Dallas/Fort Worth: <strong>260 miles</strong>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MainPageMap;
