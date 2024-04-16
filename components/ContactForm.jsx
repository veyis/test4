'use client'
import { useState, useEffect } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        arrivalDate: '',
        departureDate: '',
        adults: '',
        children: '',
        pets: '',
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formDataObj = Object.fromEntries(formData.entries());
  
      fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataObj),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };
  

    return (
        <div className="container max-w-4xl mx-auto px-4 py-8">
            <form
                action='/api/properties'
                method='POST'
                encType='multipart/form-data'
                onSubmit={handleSubmit}
                className="space-y-6 bg-white shadow-lg rounded-lg p-6 sm:p-8"
            >
                <div className="grid grid-cols-1 gap-6">
                    {/* Contact Details */}
                    {['Name', 'Email', 'Phone'].map((field) => (
                        <input
                            key={field.toLowerCase()}
                            type={field.toLowerCase() === 'email' ? 'email' : field.toLowerCase() === 'phone' ? 'tel' : 'text'}
                            name={field.toLowerCase()}
                            id={field.toLowerCase()}
                            placeholder={field}
                            value={formData[field.toLowerCase()]}
                            onChange={handleChange}
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base placeholder-gray-400"
                            required
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-group">
                        <label htmlFor="arrivalDate" className="block text-base font-medium text-gray-700">
                            Arrival Date
                        </label>
                        <input
                            type="date"
                            name="arrivalDate"
                            id="arrivalDate"
                            value={formData.arrivalDate}
                            onChange={handleChange}
                            min={today}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base placeholder-gray-400"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="departureDate" className="block text-base font-medium text-gray-700">
                            Departure Date
                        </label>
                        <input
                            type="date"
                            name="departureDate"
                            id="departureDate"
                            value={formData.departureDate}
                            onChange={handleChange}
                            min={formData.arrivalDate || today}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base placeholder-gray-400"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Options for Adults, Children, and Pets */}
                    {['Adults', 'Children', 'Pets'].map((field) => (
                        <div key={field.toLowerCase()} className="form-group">
                            <label htmlFor={field.toLowerCase()} className="block text-base font-medium text-gray-700 capitalize">
                                {field}
                            </label>
                            <select
                                name={field.toLowerCase()}
                                id={field.toLowerCase()}
                                value={formData[field.toLowerCase()]}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base bg-white text-black"
                                required
                            >
                                <option  value="">- Select -</option>
                                {[...Array(10)].map((_, i) => (
                                    <option key={i} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>

                <input
                    type="text"
                    name="discountCode"
                    id="discountCode"
                    placeholder="Discount Code (Optional)"
                    value={formData.discountCode}
                    onChange={handleChange}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base placeholder-gray-400"
                />

                <div className="form-group">
                    <label htmlFor="comments" className="block text-base font-medium text-gray-700">
                        Comments/Questions
                    </label>
                    <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        value={formData.comments}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-500 sm:text-base placeholder-gray-400"
                        placeholder="Enter any comments or questions here"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

>
                    Send Inquiry
                </button>
            </form>
        </div>
    );
}
