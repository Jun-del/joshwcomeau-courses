"use client";
import React from "react";

function Revealable({ children }) {
	const [isRevealable, setIsRevealable] = React.useState(false);

	return isRevealable ? (
		children
	) : (
		<div className="reveal">
			<button onClick={() => setIsRevealable(true)}>Reveal Content</button>
		</div>
	);
}

export default Revealable;
