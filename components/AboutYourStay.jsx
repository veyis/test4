import React from "react";
import {
	FaTimes,
	FaPaw,
	FaSuitcaseRolling,
	FaBaby,
	FaCamera,
	FaMoneyBill,
} from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineSafety, AiOutlineSound } from "react-icons/ai";

const AboutYourStay = () => {
	return (
		<>
			<div className="bg-slate-50 p-6 my-4">
				<h2 className="text-xl font-bold mb-4">ABOUT YOUR STAY</h2>

				<div className="grid grid-cols-[1fr,4fr] gap-4 text-gray-700">
					<div className="flex flex-1">
						<BiTimeFive className="text-xl mr-2" />
						Check-in:
					</div>
					<div className="flex flex-1">
						<span>After  04:00 PM</span>
					</div>

					<div className="flex flex-1">
						<BiTimeFive className="text-xl mr-2" />
						Check-out:
					</div>
					<div className="flex flex-1">
						<span>By 10:00 AM</span>
					</div>

					<div className="flex flex-1">
						<FaSuitcaseRolling className="text-xl mr-2" />
						Minimum stay:
					</div>
					<div className="flex flex-1">
						<span>
							min. 30 days - long term
							<br />
							min. 2 days - short term
						</span>
					</div>

					<div className="flex flex-1">
						<FaTimes className="text-xl mr-2" />
						Cancellation:
					</div>
					<div className="flex flex-1">
						<span>Full refund available up to 14 days before your arrival</span>
					</div>

					<div className="flex flex-1">
						<FaPaw className="text-xl mr-2" />
						Pets:
					</div>
					<div className="flex flex-1">
						<span>Sorry, no pets allowed</span>
					</div>

          <div className="flex flex-1">
          <AiOutlineSound className="text-xl mr-2" />
						Quiet Hours:
					</div>
					<div className="flex flex-1">
          <span>10:00 PM - 7:00 AM</span>
					</div>

          <div className="flex flex-1">
          <IoMdPeople className="text-xl mr-2" />
						Maximum guests:
					</div>
					<div className="flex flex-1">
          <span>6 guests</span>
					</div>


          <div className="flex flex-1">
          <AiOutlineSafety className="text-xl mr-2" />
						Safety:
					</div>
					<div className="flex flex-1">
          <span>Candles, incense and similar flame & smoke emitting devices are not
						allowed inside the house due to the potential fire hazard.
					<br />
						We have security cameras operating outside on property. <br />
						 Carbon monoxide, smoke detectors, and fire extinguishers are tested and
						available for emergencies.</span>
					</div>


          <div className="flex flex-1">
          <MdOutlineCleanHands className="text-xl mr-2" />
						Parties:
					</div>
					<div className="flex flex-1">
          <span>Not allowed</span>
					</div>


          <div className="flex flex-1">
      		<FaBaby className="text-xl mr-2"  />
						Children:
					</div>
					<div className="flex flex-1">
          <span>		Allowed; please bring your baby gear. We don’t provide high chairs
						or cribs. This property does include stairs.</span>
					</div>


          <div className="flex flex-1">
          <FaMoneyBill className="text-xl mr-2" />
						Cleaning fee:
					</div>
					<div className="flex flex-1">
          <span>$150 per stay</span>
					</div>


				</div>

		
	

	
			</div>
		</>
	);
};
export default AboutYourStay;
