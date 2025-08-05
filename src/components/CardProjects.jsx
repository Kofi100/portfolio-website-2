import React from "react";
export default function CardProjects({
	name,
	imgSrc,
	description,
	link,
	githubLink,
}) {
	return (
		<div className="bg-white w-auto  p-2.5 text-center flex flex-col items-center rounded-2xl shadow-lg  ">
			<section className="flex w-full">
				<p className="flex justify-start">{name}</p>
				<section className="flex justify-end w-full">
					<a href={githubLink} target="_blank">
						<img src="/images/logos/github-mark.svg" alt="" className="w-10" />
					</a>
					<a href={link}>
						<img
							src="/images/icons/diagonal-arrow-right-up-outline-svgrepo-com.svg"
							alt=""
							className="w-10"
						/>
					</a>
				</section>
			</section>

			<a href={link}>
				<img
					src={imgSrc || "/images/icons/image-square-xmark-svgrepo-com.svg"}
					alt={name}
					className="h-[20rem] aspect-[4/3] rounded-2xl"
					// onError={(e) => {
					// 	e.currentTarget.src = "/images/icons/image-svgrepo-com.svg";
					// }}
				/>
			</a>
			{/* screenshot */}
			<p className="p-5">{description}</p>
			{/* {link && (
				<a href={link} target="_blank" rel="noopener noreferrer">
					View Project
				</a>
			)} */}
		</div>
	);
}
