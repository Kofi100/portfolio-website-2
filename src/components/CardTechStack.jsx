import React from "react";
export default function CardTechStack({ name }) {
	return (
		<div className="flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm">
			{name}
		</div>
	);
}
