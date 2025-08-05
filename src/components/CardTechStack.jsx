import React from "react";
export default function CardTechStack({ name }) {
	return (
		<div className="w-auto max-w-[13rem] text-center bg-white rounded-md p-5 flex justify-center items-center">
			{name}
		</div>
	);
}
