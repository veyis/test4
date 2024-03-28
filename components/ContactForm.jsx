'use client'
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        arrivalDate: '',
        departureDate: '',
        adults: '',
        children: '',
        pets: '',
        name: '',
        email: '',
        phone: '',
        discountCode: '',
        comments: '',
    });

    const formatDate = (date) => {
        const d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
    };

    const today = formatDate(new Date());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const minDepartureDate = formData.arrivalDate ? formData.arrivalDate : today;

    return (
        <div className="container mx-auto px-4 py-8 text-2xl">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-md p-8">
                <div className="flex flex-wrap -mx-2">
                    <div className="px-2 w-full sm:w-1/2">
                        <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700">
                            Arrival Date
                        </label>
                        <input
                            type="date"
                            name="arrivalDate"
                            id="arrivalDate"
                            value={formData.arrivalDate}
                            onChange={handleChange}
                            min={today}
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="px-2 w-full sm:w-1/2">
                        <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700">
                            Departure Date
                        </label>
                        <input
                            type="date"
                            name="departureDate"
                            id="departureDate"
                            value={formData.departureDate}
                            onChange={handleChange}
                            min={minDepartureDate}
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                </div>

                {/* Selection fields for adults, children, pets with full width for consistency */}
                <div className="flex flex-wrap -mx-2"> {/* Use flex-wrap and negative margin for responsive design */}
                    <div className="w-full sm:w-1/3 px-2">
                        <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                            Adults
                        </label>
                        <select
    name="adults"
    id="adults"
    value={formData.adults}
    onChange={handleChange}
    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    required
>
    <option value="">- Select -</option>
    {/* Generate options for numbers 1-8 */}
    {[...Array(9)].map((_, i) => (
        <option key={i} value={i}>
            {i}
        </option>
    ))}
</select>
                    </div>
                    <div className="w-full sm:w-1/3 px-2">
                        <label htmlFor="children" className="block text-sm font-medium text-gray-700">
                            Children
                        </label>
                        <select
    name="children"
    id="children"
    value={formData.children}
    onChange={handleChange}
    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    required
>
    <option value="">- Select -</option>
    {/* Generate options for numbers 1-8 */}
    {[...Array(9)].map((_, i) => (
        <option key={i} value={i}>
            {i}
        </option>
    ))}
</select>
                    </div>
                    <div className="w-full sm:w-1/3 px-2">
                        <label htmlFor="pets" className="block text-sm font-medium text-gray-700">
                            Pets
                        </label>
                        <select
    name="pets"
    id="pets"
    value={formData.pets}
    onChange={handleChange}
    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    required
>
    <option value="">- Select -</option>
    {/* Generate options for numbers 1-8 */}
    {[...Array(9)].map((_, i) => (
        <option key={i} value={i}>
            {i}
        </option>
    ))}
</select>
                    </div>
                </div>

                {/* Text inputs for name, email, phone, and discount code */}
                <div className="grid grid-cols-1 gap-y-4">
                    {/* Input fields with increased rounded corners for a modern look */}
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                    <input
                        type="text"
                        name="discountCode"
                        id="discountCode"
                        placeholder="Discount Code (Optional)"
                        value={formData.discountCode}
                        onChange={handleChange}
                        className="rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Textarea for comments/questions */}
                <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                        Comments/Questions
                    </label>
                    <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        value={formData.comments}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-500 sm:text-sm"
                        placeholder="Enter any comments or questions here"
                    ></textarea>
                </div>

                {/* Submit button with enhanced hover and focus styles */}
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Send Inquiry
                </button>
            </form>
        </div>
    );
}
