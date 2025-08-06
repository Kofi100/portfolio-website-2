// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
const ThankYouSubmission = lazy(() => import("./ThankYouSubmission"));

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/thank-you" element={<ThankYouSubmission />} />
					</Routes>
				</Suspense>
			</Router>
			<Analytics />
		</div>
	);
}

export default App;
