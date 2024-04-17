import Image from "next/image";

const MainPageMap = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 rounded-lg">
			<div className="md:col-span-1 relative w-full h-96 bg-white">
				<Image
					src="/map.jpg"
					alt="Descriptive Image Alt Text"
                    width={400}
                    height={400}
                
				
					objectFit="contain" // Ensures the image scales down to fit within the bounds of the container without distortion or cropping
				/>
			</div>
			<div className="md:col-span-2 flex justify-center items-center text-lg font-medium  text-gray-800 p-6 bg-slate-50">
				<p>
                    
           
                Whether you find yourself in San Antonio for business, leisure, a
				special event, or in need of temporary housing during relocation, our
				accommodations are designed to provide the ideal fusion of convenience
				and relaxation. 
                <br /> <br />

                Live in complete comfort within a fully furnished home,
				boasting contemporary luxuries, just a short drive or stroll away from
				shopping, dining, and the vibrant downtown scene.
                <br /> <br />
                 With San Antonio's
				myriad attractions at your fingertips, we extend our invitation for you
				to stay in ”Tesla House” and fully experience the beauty of this
				remarkable city.
                </p>
			</div>
		</div>
	);
};

export default MainPageMap;
