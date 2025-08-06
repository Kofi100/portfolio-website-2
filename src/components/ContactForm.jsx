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
		<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[75%]">
			<input type="hidden" name="_honey" className="hidden" />
			<input
				type="hidden"
				name="_next"
				value="https://yourportfolio.com/thank-you"
			/>

			{/* Name Field */}
			<label htmlFor="name" className="text-left font-semibold">
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
				className="p-2 border border-gray-300 rounded"
			/>

			{/* Phone Field */}
			<label htmlFor="phone" className="text-left font-semibold">
				Phone Number (Optional)
			</label>
			<p className="text-sm text-left text-gray-500 mb-2">
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
				className="p-2 border border-gray-300 rounded"
			/>

			{/* Email Field */}
			<label htmlFor="email" className="text-left font-semibold">
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
				className="p-2 border border-gray-300 rounded"
			/>

			{/* Message Field */}
			<label htmlFor="message" className="text-left font-semibold">
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
				className="p-2 border border-gray-300 rounded"
			></textarea>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isSubmitting}
				className={`bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-300 transition ${
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
