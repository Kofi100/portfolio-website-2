// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import "./App.css";

function ThankYouSubmission() {
	// const [count, setCount] = useState(0)

	return (
		<div className="font-body text-[1.03rem] text-slate-900">
			<main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_15%_10%,#e3f0ff_0%,#eff6ff_40%,#f8f6ef_100%)] p-5">
				<section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white/90 p-8 text-center shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur md:p-10">
					<p className="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
						Message sent
					</p>
					<h1 className="mt-4 text-5xl">Thank You</h1>
					<p className="mx-auto mt-3 max-w-[44ch] leading-relaxed text-slate-700">
						Thank you for reaching out. I received your message and will reply as soon as possible.
					</p>
					<Link
						to="/"
						className="project-link mt-7 inline-flex min-w-44 items-center justify-center rounded-full bg-amber-300 px-6 py-3 font-semibold text-slate-900"
					>
						Go Back Home
					</Link>
				</section>
			</main>
		</div>
	);
}

export default ThankYouSubmission;
