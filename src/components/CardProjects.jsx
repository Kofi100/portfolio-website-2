import React from "react";
export default function CardProjects({
	name,
	imgSrc,
	description,
	link,
	githubLink,
}) {
	return (
		<article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]">
			<a href={link} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-2xl">
				<img
					src={imgSrc || "/images/icons/image-square-xmark-svgrepo-com.svg"}
					alt={name}
					className="aspect-video w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.03]"
				/>
			</a>

			<div className="mt-5 flex flex-1 flex-col">
				<h3 className="font-heading text-2xl leading-tight text-slate-900">{name}</h3>
				<p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>

				<div className="mt-5 flex items-center gap-3">
					{githubLink && (
						<a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
						>
							<img src="/images/logos/github-mark.svg" alt="GitHub" className="h-4 w-4" />
							Code
						</a>
					)}
					{link && (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
						>
							Live
							<img
								src="/images/icons/diagonal-arrow-right-up-outline-svgrepo-com.svg"
								alt="Open project"
								className="h-4 w-4 invert"
							/>
						</a>
					)}
				</div>
			</div>
		</article>
	);
}
