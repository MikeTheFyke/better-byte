"use client";
import React, { useEffect, useRef } from "react";

const useCanvas = (draw: any) => {
	const ref = useRef();

	useEffect(() => {
		const canvas = ref.current;
		const context = canvas.getContext("2d");
		let count = context.canvas.height;
		let animationID: number;

		let img = new Image();
		img.src = "/images/blueSky.jpeg";

		const renderer = () => {
			count++;
			draw(context, count, img);
			animationID = window.requestAnimationFrame(renderer);
		};
		renderer();
		return () => window.cancelAnimationFrame(animationID);
	}, []);

	return ref;
};

export default useCanvas;
