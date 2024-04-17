import InfoBox from "./InfoBox";
import Image from "next/image";
import mapPng from "@/public/map.jpg";

const InfoBoxes = () => {
	return (
		<section>
			<div className="container-xl lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
					<InfoBox
						heading="Our Location"
						backgroundColor="bg-gray-100"
						buttonInfo={{
							text: "Book Your Stay",
							link: "/properties",
							backgroundColor: "bg-gray-700",
						}}
					>
						<Image
							src={mapPng}
							alt="Hero Image"
							width={500}
							height={300}
							className="rounded-lg"
						/>
					</InfoBox>
					{/* <InfoBox
						heading="Xperience the Beauty"
						backgroundColor="bg-gray-100"
						buttonInfo={{
							text: "Book Your Stay",
							link: "/properties/add",
							backgroundColor: "bg-gray-700",
						}}
					>
						<div>
            Whether you find yourself in San Antonio for business, leisure, a
						special event, or in need of temporary housing during relocation,
						our accommodations are designed to provide the ideal fusion of
						convenience and relaxation. Live in complete comfort within a fully
						furnished home, boasting contemporary luxuries, just a short drive
						or stroll away from shopping, dining, and the vibrant downtown
						scene. With San Antonio's myriad attractions at your fingertips, we
						extend our invitation for you to stay in ”Tesla House” and fully
						Xperience theBeauty of this remarkable city.
            </div>
					</InfoBox> */}
				</div>
			</div>
		</section>
	);
};
export default InfoBoxes;
