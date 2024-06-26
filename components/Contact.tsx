"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-mail";
import { RiHomeSmileLine } from "react-icons/ri";

export type FormData = {
	name: string;
	phone: string;
	email: string;
	adults: number;
	children: number;
	serviceType: string;
	message: string;

	arrivalDate: string; // Added field for arrival date
	departureDate: string; // Added field for departure date
};

const Contact: FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm<FormData>();

	// Watch the number of adults and children
	const numberOfAdults = watch("adults", 1); // Default value of 1
	const numberOfChildren = watch("children", 0); // Default value of 0

	// Calculate the remaining options
	const maxAdults = Math.max(0, 6 - numberOfChildren);
	const maxChildren = Math.max(0, 6 - numberOfAdults);

	// Get today's date in YYYY-MM-DD format
	const today = new Date().toISOString().split("T")[0];

	// Watch the value of the arrival date input
	const arrivalDate = watch("arrivalDate", today);

	const [emailSent, setEmailSent] = useState<boolean | null>(null);

	async function onSubmit(data: FormData): Promise<void> {
		try {
			await sendEmail(data);
			setEmailSent(true); // Email sent successfully
			// Reset the form
			reset(); // assuming reset is provided by useForm hook
		} catch (error) {
			setEmailSent(false); // Email sending failed
		}
	}

	return (
		<>
			<section className="flex flex-col gap-5 bg-gray-100 p-6 rounded-lg">
				<div className="flex items-center justify-center">
					<RiHomeSmileLine className="w-[3rem] h-[3rem] sm:w-[3rem] sm:h-[3rem]  text-red-600 mr-2" />
					<h1 className="text-center font-bold uppercase text-2xl md:text-2xl lg:text-3xl text-gray-600 px-6">
						Contact Us
					</h1>
					<br />
				</div>

				{emailSent !== null && (
					<p className={emailSent ? "text-green-700" : "text-red-600"}>
						{emailSent
							? "Email sent successfully. We'll be in touch shortly! "
							: "Failed to send email."}
					</p>
				)}
				<p className="text-lg text-gray-700">
					Please complete the form below, and we will respond promptly.
				</p>
				<div className="mb-5">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-5">
							<label
								htmlFor="name"
								className="mb-3 block text-base font-medium text-black"
							>
								Full Name
							</label>
							<input
								type="text"
								className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
								{...register("name", { required: true })}
							/>
							{errors.name && (
								<p className="text-red-500">Full Name is required</p>
							)}
						</div>
						<div className="mb-5">
							<label
								htmlFor="email"
								className="mb-3 block text-base font-medium text-black"
							>
								Email Address
							</label>
							<input
								type="email"
								placeholder="example@domain.com"
								className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
								{...register("email", { required: true })}
							/>
							{errors.email && (
								<p className="text-red-500">Email is required</p>
							)}
						</div>

						<div className="mb-5">
							<label
								htmlFor="phone"
								className="mb-3 block text-base font-medium text-black"
							>
								Phone Number
							</label>
							<input
								type="tel"
								className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
								{...register("phone", { required: true })}
							/>
							{errors.phone && (
								<p className="text-red-500">Phone Number is required</p>
							)}
						</div>

						<div className="mb-5">
							<label
								htmlFor="arrivalDate"
								className="mb-3 block text-base font-medium text-black"
							>
								Arrival Date
							</label>
							<input
								type="date"
								className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
								{...register("arrivalDate", { required: true, min: today })}
								id="arrivalDate"
							/>
							{errors.arrivalDate && (
								<p className="text-red-500">
                Please provide the correct arrival date.</p>
							)}
						</div>

						<div className="mb-5">
							<label
								htmlFor="departureDate"
								className="mb-3 block text-base font-medium text-black"
							>
								Departure Date
							</label>
							<input
								type="date"
								className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
								{...register("departureDate", {
									required: true,
									min: arrivalDate,
								})}
								id="departureDate"
							/>
							{errors.departureDate && (
								<p className="text-red-500">
                Please provide the correct departure date.</p>
							)}
						</div>

						<div className="mb-5">
							<label
								htmlFor="Adults"
								className="mb-3 block text-base font-medium text-black"
							>
								Adults
							</label>
							<select
								className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
								{...register("adults", { required: true })}
								id="Adults"
							>
								{Array.from({ length: maxAdults }, (_, i) => (
									<option key={i} value={i + 1}>
										{i + 1}
									</option>
								))}
							</select>
							{errors.adults && (
								<p className="text-red-500">Adult Number is required</p>
							)}
						</div>

						<div className="mb-5">
							<label
								htmlFor="children"
								className="mb-3 block text-base font-medium text-black"
							>
								Children
							</label>
							<select
								className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
								{...register("children", {
									required: "Children Number is required",
								})}
								id="children"
							>
								{Array.from({ length: maxChildren + 1 }, (_, i) => (
									<option key={i} value={i}>
										{i}
									</option>
								))}
							</select>
							{errors.children && (
								<p className="text-red-500">{errors.children.message}</p>
							)}
						</div>

						<div className="mb-5">
							<label
								htmlFor="message"
								className="mb-3 block text-base font-medium text-black"
							>
								Message
							</label>
							<textarea
								rows={4}
								placeholder="Type your message"
								className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
								{...register("message", { required: true })}
							></textarea>
							{errors.message && (
								<p className="text-red-500">Message is required</p>
							)}
						</div>

						<div>
							<button className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none">
								Submit
							</button>
						</div>
					</form>
					{emailSent !== null && (
						<p
							className={
								emailSent ? "text-green-700 text-xl " : "text-red-600 text-xl "
							}
						>
							{emailSent
								? "Email sent successfully. We'll be in touch shortly!"
								: "Failed to send email. Please try again."}
						</p>
					)}
				</div>
			</section>
		</>
	);
};

export default Contact;
