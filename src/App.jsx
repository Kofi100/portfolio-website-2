// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import CardTechStack from "./components/CardTechStack";
import CardProjects from "./components/CardProjects";
import { Analytics } from "@vercel/analytics/react";
function App() {
	// const [count, setCount] = useState(0)

	return (
		<div className="font-body text-lg">
			<Analytics />
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
					<h1>Hi! My name is Kofi Korsah,</h1>
					<p className="max-w-[25rem] p-2.5 pt-5">
						I am a tech enthusiast who is currently learning web development
						particuraly frontend development, and software development.
					</p>
					<a
						href="#projects"
						className="min-w-[20rem] p-5 rounded-xl bg-yellow-300 text-black project-link"
					>
						My Projects
					</a>
				</section>

				<section id="about-stack" className="flex flex-col md:flex-row">
					<section
						id="about"
						className="bg-[rgba(219,234,254,0.5)] min-h-[100vh] lg:max-w-[50%] md:max-w-[50%] flex flex-col justify-center"
					>
						<h2 className="">About Me</h2>
						<p className="text-justify p-2.5">
							I am a tech enthusiast with a strong passion for programming and
							creating intuitive user interfaces.
						</p>
						<p className="text-justify p-2.5">
							My goal is to design software and applications that simplify tasks
							for users, ensuring a seamless and headache-free experience.
						</p>
						<p className="text-justify p-2.5">
							I enjoy developing apps that are not only functional but also add
							value to people's lives, including my own .
						</p>
						<p className="text-justify p-2.5">
							Problem-solving is at the core of what I do, and I find
							inspiration even in the challenges I encounter, like debugging
							code or optimizing user experiences.
						</p>
					</section>
					<section
						id="tech-stack"
						className="bg-blue-100/70 h-auto md:w-[50%]  max-w-full flex flex-col justify-center"
					>
						<h2>Tech Stack</h2>
						<section className="grid lg:grid-cols-5 p-5 lg:gap-2.5 md:grid-cols-2 md:gap-2  gap-[20px] justify-center">
							<CardTechStack name="HTML" />
							<CardTechStack name="CSS" />
							<CardTechStack name="JavaScript" />
							<CardTechStack name="React" />
							<CardTechStack name="Tailwind CSS" />
							<CardTechStack name="Node.js" />
							<CardTechStack name="Python" />
							<CardTechStack name="C#" />
							<CardTechStack name="C++" />
						</section>
					</section>
				</section>
				<section
					id="projects"
					className="bg-blue-200/50  min-h-[100vh] flex flex-col justify-start p-10 "
				>
					<h2>Projects</h2>
					<p className="p-2.5">
						Here are some of the projects I have worked on.
					</p>
					<section className="grid  lg:grid-cols-3 lg:gap-5 md:grid-cols-2 md:gap-2.5 gap-[20px]">
						<CardProjects
							name="Recipe App Finder"
							description={
								"An app to find recipes made in React using two Apis: TheMealDB API and Spoonacular API."
							}
							imgSrc={
								"/images/Screenshot_4-8-2025_20292_recipe-finder-kofi-k.vercel.app.jpeg"
							}
							link={"https://recipe-finder-kofi-k.vercel.app/"}
							githubLink={"https://github.com/Kofi100/recipe-finder"}
						/>
						<CardProjects
							name="Barbershop Website"
							description={
								"A beautiful Ghanaian barbershop website made with HTML, CSS, and JavaScript."
							}
							imgSrc={"/images/Screenshot SharpKutz Barbershop 2.png"}
						/>
						<CardProjects
							name="Trivia App Using OpenTriviaDB"
							description={
								"A trivia app with different topics made with HTML, CSS, and JavaScript and powered by OpenTriviaDB API."
							}
							// imgSrc={"/public/images/desktop-RatingWebsite-screenshot.png"}
							link={"https://kofi100.github.io/trivia-App-OpenTriviaDB/"}
							githubLink={"https://github.com/Kofi100/trivia-App-OpenTriviaDB"}
						/>
						<CardProjects
							name="Omelette Recipe Webpage"
							description={
								"A webpage made with HTML and CSS to create a webpage for an omelette recipe."
							}
							imgSrc={"/images/screenshot_RecipePage_Desktop2.png"}
							link={"https://kofi100.github.io/RecipePageHTML-Chall/"}
							githubLink={"https://github.com/Kofi100/RecipePageHTML-Chall"}
						/>
						<CardProjects
							name="Hotel Management System"
							description={
								"A desktop application made with C# and MySQL to manage hotel bookings, customers, and rooms."
							}
							// imgSrc={"./public/images/desktop-RatingWebsite-screenshot.png"}
							githubLink={"https://github.com/Kofi100/Hotel_Management_System2"}
							link={"https://github.com/Kofi100/Hotel_Management_System2"}
						/>
					</section>
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

export default App;
