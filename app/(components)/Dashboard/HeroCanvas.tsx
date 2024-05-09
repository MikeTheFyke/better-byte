"use client";
import React, { useEffect, useState } from "react";
import { draw } from "./TestCanvas";
import useCanvas from "./useCanvas";
import useWidth from "./useWidth";

const HeroCanvas = () => {
	const windowWidth = useWidth();

	const [canvasWidth, setWidth] = useState(
		typeof window === "undefined" ? "1000px" : windowWidth
	);
	const [canvasHeight, setHeight] = useState(
		typeof window === "undefined" ? "500px" : windowWidth / 2
	);

	const ref = useCanvas(draw);

	const handleResize = () => {
		setWidth(window.innerWidth * 0.8);
		setHeight((window.innerWidth * 0.8) / 2);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div
			style={{ border: "solid 8px #16a34a" }}
			className="rounded-md drop-shadow-8xl drop-shadow-grey-900/10"
			id="HeroCanvas"
		>
			<div style={{ border: "solid 8px white" }} className="rounded-md">
				<canvas
					ref={ref}
					height={canvasHeight}
					width={canvasWidth}
					style={{ border: "solid 2px #94a3b8" }}
					className="rounded-md"
				/>
			</div>
		</div>
	);
};

export default HeroCanvas;
