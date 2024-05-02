export const draw = (context: any, count: number, img: HTMLImageElement) => {
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	const delta = (count % context.canvas.height) / 2;
	let skyDelta = (count % context.canvas.height) * 2;
	if (skyDelta <= 560) {
		context.drawImage(
			img,
			0,
			0 - skyDelta,
			context.canvas.width,
			context.canvas.height * 3
		);
	} else {
		context.drawImage(
			img,
			0,
			-560,
			context.canvas.width,
			context.canvas.height * 3
		);
	}

	// context.beginPath();
	// context.moveTo(0, context.canvas.height - delta);
	// context.lineTo(context.canvas.width, context.canvas.height - delta);
	// context.strokeStyle = "green";
	// context.stroke();
};
