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
	petTypes: string[];
	arrivalDate: string; // Added field for arrival date
	departureDate: string; // Added field for departure date
};

const Contact: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>();

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
					<h1 className="text-center font-bold uppercase text-2xl md:text-2xl lg:text-3xl text-gray-600">
						Contact Us
					</h1>
				</div>

				{emailSent !== null && (
					<p className={emailSent ? "text-green-700" : "text-red-600"}>
						{emailSent
							? "Email sent successfully. We'll be in touch shortly! "
							: "Failed to send email."}
					</p>
				)}
				<p className="text-lg text-gray-700">
					Fill out the form below and we will get back to you as soon as
					possible.
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
								{...register("arrivalDate", { required: true })}
							/>
							{errors.arrivalDate && (
								<p className="text-red-500">Arrival date is required</p>
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
								{...register("departureDate", { required: true })}
							/>
							{errors.departureDate && (
								<p className="text-red-500">Departure date is required</p>
							)}
						</div>

						<div className="mb-5">
							<label
								htmlFor="Adults"
								className="mb-3 block text-base font-medium text-black"
							>
								Adults
							</label>
							<input
								type="number"
								className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
								{...register("adults", { required: true })}
							/>
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
							<input
								type="number"
								className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
								id="children" // Ensure the id matches the htmlFor in the label
								{...register("children", {
									required: "Children Number is required",
									min: {
										value: 1,
										message: "Number of children cannot be less than 1", // Custom message for min value
									},
									max: {
										value: 12,
										message: "Number of children cannot be more than 12", // Custom message for max value
									},
								})}
							/>
							{errors.children && (
								<p className="text-red-500">{errors.children.message}</p>
							)}
						</div>

						<div className="mb-5">
							<span className="mb-3 block text-base font-medium text-black">
								Pets
							</span>
							<div className="flex flex-col gap-2">
								<label>
									<input
										type="checkbox"
										value="Dog"
										{...register("petTypes.2")}
									/>{" "}
									Dog
								</label>
								<label>
									<input
										type="checkbox"
										value="Cat"
										{...register("petTypes.3")}
									/>{" "}
									Cat
								</label>
								<label>
									<input
										type="checkbox"
										value="Other"
										{...register("petTypes.4")}
									/>{" "}
									Other
								</label>
								<label>
									<input
										type="checkbox"
										value="No Peds"
										{...register("petTypes.4")}
									/>{" "}
									No Peds
								</label>
							</div>
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
