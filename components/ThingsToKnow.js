import React from "react";

const ThingsToKnow = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Things to Know</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* House rules */}
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">House Rules</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Check-in after 4:00 PM</li>
                        <li>Checkout before 10:00 AM</li>
                        <li>Self check-in with keypad</li>
                        <li>6 guests maximum</li>
                        <li>No pets</li>
                        <li>Quiet hours: 10:00 PM - 7:00 AM</li>
                        <li>No parties or events</li>
                        <li>No commercial photography</li>
                        <li>No smoking</li>
                    </ul>
                </div>
                {/* Safety & property */}
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Safety & Property</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Safety devices</li>
                        <li>Exterior security cameras on property</li>
                        <li>"House is equipped with (3) security cameras on the outside and an
                            alarm system with door, window, and motion sensors inside which
                            will be disarmed during your stay. There are no cameras inside the
                            house."
                        </li>
                        <li>Carbon monoxide alarm installed</li>
                        <li>Smoke alarm installed</li>
                        <li>Noise decibel monitors on property</li>
                    </ul>
                </div>
                {/* Cancellation Policy */}
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Cancellation Policy</h3>
                    <p className="text-gray-600">
                        Before you book, make sure you're comfortable with this Host's
                        cancellation policy. Keep in mind that Airbnb's Extenuating
                        Circumstances policy doesn't cover cancellations due to illness or
                        travel disruptions caused by COVID-19.
                    </p>
                    <p className="text-gray-600">
                        Cancel by 5 days before arrival for a partial refund: the first 30
                        nights are non-refundable, but you’ll get back every night after
                        that.
                    </p>
                    <button className="text-blue-500 hover:text-blue-700 mt-2"
                            href="https://www.airbnb.com/help/article/149"
                            target="_blank"
                            rel="noopener noreferrer"
                    >
                        Learn more about cancellation policies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThingsToKnow;
