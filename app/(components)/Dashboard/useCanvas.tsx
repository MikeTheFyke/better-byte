"use client";
import React, { useEffect, useRef, useState } from "react";

const useCanvas = (draw: any) => {
	const ref = useRef();

	const [canvasWidth, setWidth] = useState(
		typeof window === "undefined"
			? 0
			: document.getElementById("HeroCanvas")?.getBoundingClientRect().width
	);
	const [canvasHeight, setHeight] = useState(
		typeof window === "undefined"
			? 0
			: document.getElementById("HeroCanvas")?.getBoundingClientRect().height
	);

	const handleResize = () => {
		setWidth(
			document.getElementById("HeroCanvas")?.getBoundingClientRect().width
		);
		setHeight(
			document.getElementById("HeroCanvas")?.getBoundingClientRect().height
		);
	};

	useEffect(() => {
		const canvas = ref.current;
		const context = canvas.getContext("2d");
		let count = context.canvas.height;
		let animationID: number;

		let skyImg = new Image();
		skyImg.src = "/images/blueSky.jpg";
		let mountainImg = new Image();
		mountainImg.src = "/images/mountains.png";
		let hill01Img = new Image();
		hill01Img.src = "/images/Hill01.png";
		let hill02Img = new Image();
		hill02Img.src = "/images/Hill02.png";
		let hill03Img = new Image();
		hill03Img.src = "/images/Hill03.png";

		handleResize();
		window.addEventListener("resize", handleResize);

		const renderer = () => {
			count++;
			draw(
				context,
				count,
				skyImg,
				mountainImg,
				hill01Img,
				hill02Img,
				hill03Img,
				canvasHeight,
				canvasWidth
			);
			animationID = window.requestAnimationFrame(renderer);
		};
		renderer();
		return () => {
			return (
				window.cancelAnimationFrame(animationID),
				window.removeEventListener("resize", handleResize)
			);
		};
	}, []);

	return ref;
};

export default useCanvas;
