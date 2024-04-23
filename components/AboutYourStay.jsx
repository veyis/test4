import React from 'react'
import { FaTimes, FaPaw, FaSuitcaseRolling, FaBaby, FaCamera, FaMoneyBill } from 'react-icons/fa';
import { MdOutlineCleanHands } from 'react-icons/md';
import { IoMdPeople } from 'react-icons/io';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineSafety, AiOutlineSound } from 'react-icons/ai';

const AboutYourStay = () => {
  return (

        <div className="bg-slate-50  p-6   my-4">
      <h2 className="text-xl font-bold mb-4">ABOUT YOUR STAY</h2>

      <div className="space-y-4 text-gray-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BiTimeFive className="text-xl mr-2" />
            Check-in:
          </div>
          <span>After 4:00 PM</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BiTimeFive className="text-xl mr-2" />
            Check-out:
          </div>
          <span>By 10:00 AM</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaSuitcaseRolling className="text-xl mr-2" />
            Minimum stay:
          </div>
          <span>
            min. 30 days - long term
            <br />
            min. 2 days – short term
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaTimes className="text-xl mr-2" />
            Cancellation:
          </div>
          <span>Full refund available up to 5 days before your arrival</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaPaw className="text-xl mr-2" />
            Pets:
          </div>
          <span>Sorry, no pets allowed</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <AiOutlineSound className="text-xl mr-2" />
            Quiet Hours:
          </div>
          <span>11:00 PM - 6:00 AM</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <IoMdPeople className="text-xl mr-2" />
            Maximum guests:
          </div>
          <span>6 guests</span>
        </div>

        <div className="flex">
          <div className="flex  ">
            <AiOutlineSafety className="text-xl mr-2" />
            Safety:
          </div>
          <div className='px-2 items-center justify-between'>
            Candles, incense and similar flame & smoke emitting devices are not allowed inside the house due to the potential fire hazard.
            <br />
            We have security cameras operating outside on property. Carbon monoxide, smoke detectors, and fire extinguishers are tested and available for emergencies.
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MdOutlineCleanHands className="text-xl mr-2" />
            Parties:
          </div>
          <span>Not allowed</span>
        </div>

        <div className="flex">
          <div className="flex">
            <FaBaby className="text-xl mr-2" />
            Children:
          </div>
          <span className='px-2'>Allowed; please bring your baby gear. We don’t provide high chairs or cribs. This property does include stairs.</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaMoneyBill className="text-xl mr-2" />
            Cleaning fee:
          </div>
          <span>$150 per stay</span>
        </div>
      </div>
    </div>
 
  );
};
export default AboutYourStay