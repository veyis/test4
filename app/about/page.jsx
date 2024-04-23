import Image from "next/image";
import ownerPhoto from "@/public/AlexRandy.jpg"; // Make sure to replace this path with the actual photo's path

const AboutUs = () => {
	return (
		<section className="py-12 px-4 bg-gray-50">
			<div className="max-w-6xl mx-auto">
				{/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About The Owners</h2> */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
					<div className="md:col-span-5">
						<div className="w-full h-[28rem] relative">
							<Image
								layout="fill"
								objectFit="cover"
								src={ownerPhoto}
								alt="Aleksandra and Randy"
								className="rounded-xl shadow-lg"
							/>{" "}
						</div>
					</div>
					<div className="md:col-span-7 text-gray-700 space-y-4">
						<div class="container">
							<h1>Hello there! We are Aleksandra and Randy. </h1>
							
						
							<p className="py-2">
							On our first trip to San Antonio, we fell in love with this City’s charm. We were captivated by the enchanting beauty of the Riverwalk, the rich history of the Alamo, and the vibrant energy of Hemisphere Park's festivities.

							</p>
					
							<p className="py-1">
							 
It is our privilege to open the doors of this lovely home to you and other guests. We have hosted families, couples, gatherings of friends and family, members of the military and business travelers.
We strive to provide you with a memorable and enjoyable stay as you seek a temporary home away from home.
 
							</p>
						
							
							<p className="py-1">
							As you get settled in and explore San Antonio, we hope to provide you with a wonderful and fulfilling experience.							</p>
							<p className="py-1">
							Please do not hesitate to contact us if you have any questions or need any assistance. Your comfort, enjoyment, and lasting memories are our top priorities.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};






export default AboutUs;
