import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const formData = new FormData(e.target);
			await fetch("https://formsubmit.co/kofi.k.otchere@gmail.com", {
				method: "POST",
				body: formData,
			});

			navigate("/thank-you"); // React Router redirect
		} catch (error) {
			console.error("Submission error:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex w-full max-w-[760px] flex-col gap-4 text-left">
			<input type="hidden" name="_honey" className="hidden" />
			<input
				type="hidden"
				name="_next"
				value="https://kofi-k-portfolio-website-2.vercel.app/thank-you"
			/>

			{/* Name Field */}
			<label htmlFor="name" className="font-semibold text-slate-800">
				Name *
			</label>
			<input
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				placeholder="Your full name"
				required
				className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-slate-500 focus:outline-none"
			/>

			{/* Phone Field */}
			<label htmlFor="phone" className="font-semibold text-slate-800">
				Phone Number (Optional)
			</label>
			<p className="mb-1 text-sm text-slate-500">
				Format: +[country code][number]
			</p>
			<input
				type="tel"
				id="phone"
				name="phone"
				value={formData.phone}
				onChange={handleChange}
				placeholder="+233 24 000 0000"
				pattern="^\+[\d\s\-\(\)]{8,15}$"
				className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-slate-500 focus:outline-none"
			/>

			{/* Email Field */}
			<label htmlFor="email" className="font-semibold text-slate-800">
				Email *
			</label>
			<input
				type="email"
				id="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				placeholder="Your email address"
				required
				className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-slate-500 focus:outline-none"
			/>

			{/* Message Field */}
			<label htmlFor="message" className="font-semibold text-slate-800">
				Your Message *
			</label>
			<textarea
				id="message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				rows="5"
				placeholder="Any questions, comments or requests?"
				required
				className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-slate-500 focus:outline-none"
			></textarea>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isSubmitting}
				className={`mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 ${
					isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
				}`}
			>
				{isSubmitting ? (
					<span className="flex items-center justify-center">
						<svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
							{/* Loading spinner SVG */}
						</svg>
						Sending...
					</span>
				) : (
					"Submit"
				)}
			</button>
		</form>
	);
}
