// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import CardTechStack from "./components/CardTechStack";
import CardProjects from "./components/CardProjects";
import ContactForm from "./components/ContactForm";
function Home() {
	// const [count, setCount] = useState(0)

	return (
		<div className="font-body text-[1.03rem] text-slate-900">
			<header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-[#f4f8ff]/85 backdrop-blur">
				<div className="mx-auto flex h-18 w-[min(1100px,92vw)] items-center justify-between">
					<a href="#intro" className="font-heading text-xl tracking-wide text-slate-900">
						KOFI
					</a>
					<nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-[0.11em] text-slate-700 md:flex">
						<a href="#about" className="nav-link">
							About
						</a>
						<a href="#projects" className="nav-link">
							Projects
						</a>
						<a href="#contact" className="nav-link">
							Contact
						</a>
					</nav>
					<a href="#projects" className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 md:inline-flex">
						See Work
					</a>
				</div>
			</header>

			<main className="relative overflow-hidden bg-[radial-gradient(circle_at_10%_0%,#e3f0ff_0%,#eff6ff_35%,#f8f6ef_100%)] pt-20">
				<div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyan-200/45 blur-3xl" />
				<div className="pointer-events-none absolute right-0 top-96 h-80 w-80 rounded-full bg-yellow-200/45 blur-3xl" />

				<section id="intro" className="mx-auto grid min-h-[84vh] w-[min(1100px,92vw)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr]">
					<div className="space-y-7 animate-rise-up">
						<p className="inline-flex rounded-full border border-slate-900/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
							Frontend + Software Developer
						</p>
						<h1 className="max-w-[16ch] text-balance text-5xl leading-[1.05] md:text-6xl">
							I Build Fast, Helpful Digital Experiences.
						</h1>
						<p className="max-w-[52ch] text-lg leading-relaxed text-slate-700">
							I am Kofi Korsah, a developer focused on React interfaces and practical software solutions that save people time and reduce friction.
						</p>
						<div className="flex flex-wrap justify-content-center gap-4">
							<a href="#projects" className="project-link inline-flex min-w-40 justify-center rounded-full bg-amber-300 px-6 py-3.5 font-semibold text-slate-900 shadow-[0_10px_24px_rgba(217,119,6,0.24)]">
								View Projects
							</a>
							<a href="#contact" className="inline-flex min-w-40 justify-center rounded-full border border-slate-900/25 bg-white/80 px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-white">
								Contact Me
							</a>
						</div>
					</div>

					<div className="rounded-3xl border border-white/70 bg-white/70 p-8 shadow-[0_24px_65px_rgba(15,23,42,0.14)] backdrop-blur animate-rise-up-delayed">
						<p className="mb-6 text-left text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
							At a glance
						</p>
						<div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
							<div className="rounded-2xl bg-slate-900 px-5 py-4 text-left text-white">
								<p className="text-4xl font-bold leading-none">7+</p>
								<p className="mt-1 text-sm text-slate-200">Projects shipped</p>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left">
								<p className="text-3xl font-bold leading-none text-slate-800">4</p>
								<p className="mt-1 text-sm text-slate-600">Main languages</p>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left">
								<p className="text-3xl font-bold leading-none text-slate-800">100%</p>
								<p className="mt-1 text-sm text-slate-600">Learning mindset</p>
							</div>
						</div>
					</div>
				</section>

				<section id="about" className="mx-auto w-[min(1100px,92vw)] py-10">
					<div className="grid gap-8 md:grid-cols-[1fr_1.05fr]">
						<section className="rounded-3xl border border-slate-200/80 bg-white/75 p-8 text-left shadow-[0_16px_40px_rgba(15,23,42,0.09)] backdrop-blur">
							<h2 className="mb-5">About Me</h2>
							<p className="leading-relaxed text-slate-700">
								I care about building products that are clean, reliable, and intuitive from the first click. My approach combines visual clarity with solid engineering fundamentals.
							</p>
							<p className="mt-4 leading-relaxed text-slate-700">
								Whether I am debugging a small edge case or designing a complete flow, I focus on making the final experience easy for users and maintainable for developers.
							</p>
						</section>

						<section id="tech-stack" className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_16px_40px_rgba(15,23,42,0.09)]">
							<h2 className="mb-5 text-left">Tech Stack</h2>
							<section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
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
					</div>
				</section>

				<section id="projects" className="mx-auto w-[min(1100px,92vw)] py-16">
					<h2>Selected Projects</h2>
					<p className="mx-auto mt-3 max-w-[60ch] text-slate-700">
						A collection of frontend apps and software projects focused on practical functionality, clean UI, and real-world use.
					</p>
					<section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						<CardProjects
							name="Recipe App Finder"
							description={
								"A React app to discover recipes using TheMealDB and Spoonacular APIs."
							}
							imgSrc={
								"/images/Screenshot_4-8-2025_20292_recipe-finder-kofi-k.vercel.app.webp"
							}
							link={"https://recipe-finder-kofi-k.vercel.app/"}
							githubLink={"https://github.com/Kofi100/recipe-finder"}
						/>
						<CardProjects
							name="Blog Viewer App"
							description={
								"A React, Node.js, and Express app for reading and saving markdown blogs."
							}
							githubLink={"https://github.com/Kofi100/blog-viewer-react"}
							link={"https://github.com/Kofi100/blog-viewer-react"}
						/>
						<CardProjects
							name="Hotel Management System"
							description={
								"A C# and MySQL desktop application for handling bookings, rooms, and customer records."
							}
							githubLink={"https://github.com/Kofi100/Hotel_Management_System2"}
							link={"https://github.com/Kofi100/Hotel_Management_System2"}
						/>
						<CardProjects
							name="Desktop Management Script"
							description={
								"A Python script that organizes desktop files and folders automatically."
							}
							githubLink={"https://github.com/Kofi100/desktopOrganizerPython"}
							link={"https://github.com/Kofi100/desktopOrganizerPython"}
						/>
						<CardProjects
							name="Barbershop Website"
							description={
								"A branded barbershop website built with HTML, CSS, and JavaScript."
							}
							imgSrc={"/images/Screenshot SharpKutz Barbershop 2.webp"}
							link={"https://kofi100.github.io/website-template-barbershop/"}
						/>
						<CardProjects
							name="Trivia App"
							description={
								"A quiz app powered by OpenTriviaDB with multiple topics and score flow."
							}
							link={"https://kofi100.github.io/trivia-App-OpenTriviaDB/"}
							githubLink={"https://github.com/Kofi100/trivia-App-OpenTriviaDB"}
						/>
						<CardProjects
							name="Omelette Recipe Webpage"
							description={
								"A responsive recipe page project built with HTML and CSS."
							}
							imgSrc={"/images/screenshot_RecipePage_Desktop2.webp"}
							link={"https://kofi100.github.io/RecipePageHTML-Chall/"}
							githubLink={"https://github.com/Kofi100/RecipePageHTML-Chall"}
						/>
					</section>
				</section>

				<section id="contact" className="mx-auto w-[min(1100px,92vw)] py-12">
					<div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.1)] backdrop-blur md:p-10">
						<h2>Let&apos;s Build Something Useful</h2>
						<p className="mx-auto mt-3 max-w-[58ch] text-slate-700">
							Send a quick message and I will get back to you as soon as possible.
						</p>
						<div className="mt-8 flex justify-center">
							<ContactForm />
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-slate-900 py-10 text-slate-200">
				<div className="mx-auto grid w-[min(1100px,92vw)] gap-7 text-left sm:grid-cols-2">
					<div>
						<h3 className="font-heading text-2xl">Kofi Korsah</h3>
						<p className="mt-2 text-slate-300">Frontend / Software Developer</p>
						<p className="mt-1 text-slate-300">kofi.k.otchere@gmail.com</p>
					</div>
					<div>
						<h3 className="text-lg font-bold">Social</h3>
						<div className="mt-3 flex gap-4">
							<a
								href="https://github.com/Kofi100"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="rounded-xl bg-white/90 p-2.5 transition hover:bg-white"
							>
								<img src="/images/logos/github-mark.svg" alt="GitHub" className="h-7 w-7" />
							</a>
						</div>
					</div>
				</div>
				<p className="mx-auto mt-7 w-[min(1100px,92vw)] border-t border-slate-700/80 pt-5 text-left text-sm text-slate-400">
					&copy; {new Date().getFullYear()} Kofi Korsah. All rights reserved.
				</p>
			</footer>
		</div>
	);
}

export default Home;
