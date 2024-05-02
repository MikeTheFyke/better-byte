"use client";
import React, { useEffect, useRef } from "react";

const useCanvas = (draw: any) => {
	const ref = useRef();

	useEffect(() => {
		const canvas = ref.current;
		const context = canvas.getContext("2d");
		let count = context.canvas.height;
		let animationID: number;

		let skyImg = new Image();
		skyImg.src = "/images/blueSky.jpg";
		let mountainImg = new Image();
		mountainImg.src = "/images/mountains.png";

		const renderer = () => {
			count++;
			draw(context, count, skyImg, mountainImg);
			animationID = window.requestAnimationFrame(renderer);
		};
		renderer();
		return () => window.cancelAnimationFrame(animationID);
	}, []);

	return ref;
};

export default useCanvas;
