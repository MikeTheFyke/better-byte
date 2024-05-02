export const draw = (
	context: any,
	count: number,
	skyImg: HTMLImageElement,
	mountainImg: HTMLImageElement
) => {
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	const delta = (count % context.canvas.height) / 2;

	drawSky(context, count, skyImg);
	drawMountain(context, count, mountainImg);
	// context.beginPath();
	// context.moveTo(0, context.canvas.height - delta);
	// context.lineTo(context.canvas.width, context.canvas.height - delta);
	// context.strokeStyle = "green";
	// context.stroke();
};

const drawSky = (context: any, count: number, skyImg: HTMLImageElement) => {
	if (count <= 1100) {
		context.drawImage(
			skyImg,
			0,
			0 - count,
			context.canvas.width,
			context.canvas.height * 3
		);
	} else {
		context.drawImage(
			skyImg,
			0,
			-1100,
			context.canvas.width,
			context.canvas.height * 3
		);
	}
};

const drawMountain = (
	context: any,
	count: number,
	mountainImg: HTMLImageElement
) => {
	if (count <= 1001) {
		context.drawImage(
			mountainImg,
			0,
			context.canvas.height * 2 - count,
			context.canvas.width,
			context.canvas.height
		);
	} else {
		context.drawImage(
			mountainImg,
			0,
			200,
			context.canvas.width,
			context.canvas.height
		);
	}
};
