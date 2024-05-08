"use client";
import React, { useEffect, useState } from "react";
import { draw } from "./HeroCanvasLogic";
import useCanvas from "./useCanvas";

interface Props {
	height: string;
	width: string;
}

const HeroCanvas = ({ height, width }: Props) => {
	const ref = useCanvas(draw);
	const [windowWidth, setWidth] = useState(
		typeof window === "undefined" ? 0 : window.innerWidth
	);
	const [windowHeight, setHeight] = useState(
		typeof window === "undefined" ? 0 : window.innerHeight
	);
	const handleResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerWidth / 2);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	console.log("windowWidth : ", windowWidth);
	console.log("windowHeight : ", windowHeight);

	return (
		<div
			style={{ borderRadius: "26px", border: "solid 8px #16a34a" }}
			className="drop-shadow-8xl drop-shadow-grey-900/10"
		>
			<div style={{ borderRadius: "20px", border: "solid 8px white" }}>
				<canvas
					ref={ref}
					height={height}
					width={width}
					style={{ borderRadius: "20px", border: "solid 2px #94a3b8" }}
				/>
			</div>
		</div>
	);
};

export default HeroCanvas;
