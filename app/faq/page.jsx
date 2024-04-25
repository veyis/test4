'use client';
// components/FaqAccordion.js
import React, { useState } from 'react';

const faqs = [
    {
      question: "What is the maximum occupancy for the house?",
      answer: <>
        <p className='py-1'>Tesla House comfortably accommodates: 6 guests</p>
        <p>Each bedroom features a queen-size bed, while the living room contains two sofas, which, although not convertible to beds, come with extra bedding.</p>
      </>
    },
 
    {
      question: "Do any of the amenities require an additional fee to be paid prior to using them ?",
      answer: <>
        <p className='py-1'>Yes. The Hot Tub and Car Charger are available upon request for an additional fee.</p> 
        <p className='py-1'>The Hot Tub requires routine maintenance to ensure that the quality of the water and balance of chemicals is professionally managed. Upon request, the Hot Tub can be filled and maintained during your stay for an additional fee of $200 per month.</p> 
        <p className='py-1'>The Car Charger can be used upon request during your booking for an additional fee of $25 per week or $100 per month.</p>
      </>
    },
    {
      question: "What type of car charger is available?",
      answer: <p>Home is equipped with a Tesla Gen 3 wall connector & a J1772 compatible charging adapter for other EV vehicles.</p>
    },
    {
      question: "Are pets allowed?",
      answer: <p>Unfortunately, pets are not allowed to stay at the property.</p>
    },
    {
      question: "Is the house accessible to persons with disabilities?",
      answer: <>
        <p>This home is not ADA accessible. It is elevated on a pier and beam foundation and has a small flight of stairs at the front entrance and at the rear patio. The path from the driveway to the front of the house has a stone walkway</p>
      </>
    },
    {
      question: "Does the property offer on-site parking?",
      answer: <>
        <p>Yes. The private, gated driveway is suitable for up to (3) cars parked in a single line. There is plenty of curb-side parking available in front of the property.</p>
      </>
    },
    {
      question: "Does the property have fencing?",
      answer: <>
        <p>Yes, there is a shorter fence in the front of the property with a pair of gates for vehicular access to the driveway and a separate gate for pedestrian access. At the rear of the property is an 8-foot-tall wood picket privacy fence.</p>
      </>
    },

    {
      question: "What is your cancellation policy?",
      answer: <p>You are eligible for a complete refund if you cancel your reservation at least 14 days before your check-in date.</p>
    },
    {
      question: "Are parties allowed?",
      answer: <p>For the comfort and security of all guests, parties are not permitted in the house.</p>
    },
    {
      question: "What are the quiet hours?",
      answer: <p>Per the City of San Antonio noise ordinance, quiet hours are to be respected between the hours of 10pm to 7am during the workweek and on weekends.</p>
    },
    {
      question: "Are children and infants allowed?",
      answer: <>
        <p>Of course. Please bring all the gear you require for infants and toddlers. The house is not child-proofed, and we do not provide cribs, high-chairs, or other accessories small children may require.</p>
      </>
    }
  ];
  

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="text-xl">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 pl-4 pr-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqAccordion = () => {
  return (
    <div className="container mx-auto px-4 pt-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      </div>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
        <br />
        <br />
        <p>
  NOTE: If you have any questions that aren't answered in the FAQ section,
  please click the <a href="/contact" className="text-blue-500 hover:text-blue-600">Contact</a>  and send us a message.
</p>

      </div>
   
   
    </div>
  );
};

export default FaqAccordion;
