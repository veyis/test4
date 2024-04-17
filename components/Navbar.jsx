"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo-white.png";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const pathname = usePathname();

	return (
		<nav className="bg-blue-700 border-b border-blue-500">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-20 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
						{/* <!-- Mobile menu button--> */}
						<button
							type="button"
							id="mobile-dropdown-button"
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						>
							<span className="absolute -inset-0.5"></span>
							<span className="sr-only">Open main menu</span>
							<svg
								className="block h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>

					<div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
						{/* <!-- Logo --> */}
						<Link className="flex flex-shrink-0 items-center" href="/">
							<Image className="h-10 w-auto" src={logo} alt="Xperiencetheb" />

							<span className="hidden md:block text-white text-2xl font-bold ml-2">
								Xperiencetheb
							</span>
						</Link>
						{/* <!-- Desktop Menu Hidden below md screens --> */}
						<div className=" hidden md:ml-6 md:block ">
							<div className="flex space-x-2 ">
								<Link
									href="/"
									className={`${
										pathname === "/" ? "bg-black" : ""
									} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
								>
									Home
								</Link>
								<Link
									href="/properties"
									className={`${
										pathname === "/properties" ? "bg-black" : ""
									} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
								>
									Properties
								</Link>
								<Link
									href="/about"
									className={`${
										pathname === "/about" ? "bg-black" : ""
									} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
								>
									About
								</Link>
								<Link
									href="/contact"
									className={`${
										pathname === "/contact" ? "bg-black" : ""
									} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
								>
									Contact
								</Link>

								<Link
									href="/faq"
									className={`${
										pathname === "/faq" ? "bg-black" : ""
									} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
								>
									FAQ
								</Link>
								<div className="justify-end hidden md:flex md:items-right md:justify-end">
                  <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact" ? "bg-black" : ""
                  } text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 flex items-center`}
                >
                 <FaEnvelope className="mr-2" />
										<span> Booking</span>
                </Link>



									{/* <button className="text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 flex items-center">
										<FaEnvelope className="mr-2" />
										<span>Book Your Stay</span>
									</button> */}
								</div>

                
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			{isMobileMenuOpen && (
				<div id="mobile-menu">
					<div className="space-y-1 px-2 pb-3 pt-2">
						<Link
							href="/"
							className={`${
								pathname === "/" ? "bg-black" : ""
							} text-white block rounded-md px-3 py-2 text-base font-medium`}
						>
							Home
						</Link>

						<Link
							href="/properties"
							className={`${
								pathname === "/properties" ? "bg-black" : ""
							} text-white block rounded-md px-3 py-2 text-base font-medium`}
						>
							Properties
						</Link>
						<Link
							href="/about"
							className={`${
								pathname === "/about" ? "bg-black" : ""
							} text-white block rounded-md px-3 py-2 text-base font-medium`}
						>
							About
						</Link>

						<Link
							href="/contact"
							className={`${
								pathname === "/contact" ? "bg-black" : ""
							} text-white block rounded-md px-3 py-2 text-base font-medium`}
						>
							Contact
						</Link>

						<Link
							href="/faq"
							className={`${
								pathname === "/faq" ? "bg-black" : ""
							} text-white block rounded-md px-3 py-2 text-base font-medium`}
						>
							Faq
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};
export default Navbar;
