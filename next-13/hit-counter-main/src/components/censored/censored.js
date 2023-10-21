"use client";

import React from "react";

function censored({ children }) {
	const [isCensored, setIsCensored] = React.useState(false);

	function handleCensored() {
		setIsCensored(!isCensored);
	}

	return (
		<button
			className={isCensored ? "censored" : undefined}
			onClick={handleCensored}
		>
			{children}
		</button>
	);
}

export default censored;
