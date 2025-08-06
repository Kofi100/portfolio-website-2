// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Link } from "react-router";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function ThankYouSubmission() {
	// const [count, setCount] = useState(0)

	return (
		<div className="font-body text-lg">
			{/* <Analytics /> */}
			<header className="fixed w-full flex justify-between">
				<p className="bg-gray-100 w-[25%] flex items-center justify-center">
					KOFI
				</p>
				<nav className=" bg-white pt-2.5 pb-2.5 w-[75%] flex flex-row  justify-end gap-x-4 p-5">
					<a href="#about" className="hover:text-blue-500 underline">
						About
					</a>
					<a href="#projects" className="hover:text-blue-500 underline">
						Projects
					</a>
					<a href="#contact" className="hover:text-blue-500 underline">
						Contact
					</a>
					{/* <a href="#about">About</a> */}
				</nav>
			</header>
			<main className="bg-[url(/images/backgrounds/large-triangles.svg)]">
				<section
					id="intro"
					className="bg-blue-200 bg-[url(/images/backgrounds/large-triangles.svg)] h-[100vh] flex flex-col justify-center items-center"
				>
					<h1>Thank You!</h1>
					<p className="max-w-[25rem] p-2.5 pt-5">
						Thank you for reaching out. I will get back to you as soon as
						possible.
					</p>
					<Link
						to="/"
						className="min-w-[20rem] p-5 rounded-xl bg-yellow-300 text-black project-link"
					>
						<a
							href=""
							className="min-w-[20rem] p-5 rounded-xl bg-yellow-300 text-black project-link"
						>
							Go Back to Home
						</a>
					</Link>
				</section>
			</main>
			<footer className="bg-blue-500/90 text-white p-5 pb-0 ">
				<div class="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 gap-6 text-center sm:text-left">
					<div className="w-full">
						<h3 class="font-bold text-xl mb-2">Kofi Korsah</h3>
						<p>Frontend/Software Developer</p>
						{/* <p>📞 +233 24 456 7890</p> */}
						<p>📧 kofi.k.otchere@gmail.com</p>
					</div>
					{/* <div>
                        <h3 class="font-bold text-xl mb-2">Business Hours</h3>
                        <p>Mon - Fri: 8:00 AM - 7:00 PM</p>
                        <p>Sat: 9:00 AM - 5:00 PM</p>
                        <p>Sun: Closed</p>
                    </div> */}
					<div id="contact" className="justify-end">
						<h3 class="font-bold text-xl mb-2">Social Handles</h3>
						<div class="flex justify-center items-center sm:justify-start gap-4 text-2xl">
							<a
								href="https://github.com/Kofi100"
								target="_blank"
								aria-label="GitHub"
								class="hover:text-blue-400"
							>
								<img src="/images/logos/github-mark.svg" className="w-10" />
							</a>
							<a href="#" aria-label="X" class="hover:text-blue-400">
								<img
									src="/images/logos/x-twitter-logo-black.png"
									className="w-10"
								/>
							</a>
						</div>
					</div>
				</div>
				<p className="w-full flex items-center justify-center">
					&copy; {new Date().getFullYear()} Kofi Korsah. All rights reserved.
				</p>
			</footer>
		</div>
	);
}

export default ThankYouSubmission;
