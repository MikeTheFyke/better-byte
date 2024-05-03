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
	let mountainWidth = context.canvas.width * 2;
	let mountainX = 0 - context.canvas.width / 4;
	if (count <= 1001) {
		context.drawImage(
			mountainImg,
			mountainX,
			context.canvas.height * 2 - count,
			mountainWidth,
			context.canvas.height
		);
	} else {
		if (count > 1001 && count <= 1600) {
			let widthOffset = count - 1001;
			let xOffset = count - 1001;
			context.drawImage(
				mountainImg,
				mountainX + xOffset / 2,
				200,
				mountainWidth - widthOffset * 2,
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
	}
};
