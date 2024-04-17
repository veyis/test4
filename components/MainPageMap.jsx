import Image from "next/image";

const MainPageMap = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 rounded-lg">
			<div className="relative w-full h-96 bg-white">
				<Image
					src="/map.jpg"
					alt="Descriptive Image Alt Text"
					layout="fill"
					objectFit="contain" // Ensures the image scales down to fit within the bounds of the container without distortion or cropping
				/>
			</div>
			<div className="flex justify-center items-center text-lg font-medium h-96 text-gray-800 p-2">
				Whether you find yourself in San Antonio for business, leisure, a
				special event, or in need of temporary housing during relocation, our
				accommodations are designed to provide the ideal fusion of convenience
				and relaxation. Live in complete comfort within a fully furnished home,
				boasting contemporary luxuries, just a short drive or stroll away from
				shopping, dining, and the vibrant downtown scene. With San Antonio's
				myriad attractions at your fingertips, we extend our invitation for you
				to stay in ”Tesla House” and fully Xperience theBeauty of this
				remarkable city.
			</div>
		</div>
	);
};

export default MainPageMap;
