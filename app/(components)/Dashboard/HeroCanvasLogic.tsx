export const draw = (
	context: any,
	count: number,
	skyImg: HTMLImageElement,
	mountainImg: HTMLImageElement,
	hill01Img: HTMLImageElement,
	hill02Img: HTMLImageElement,
	canvasHeight: number,
	canvasWidth: number
) => {
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	const delta = (count % context.canvas.height) / 2;

	drawSky(context, count, skyImg, canvasHeight, canvasWidth);
	drawMountain(context, count, mountainImg);
	drawHill01(context, count, hill01Img);
	drawHill02(context, count, hill02Img);
};

const drawSky = (
	context: any,
	count: number,
	skyImg: HTMLImageElement,
	canvasHeight: number,
	canvasWidth: number
) => {
	if (count <= 1100) {
		context.drawImage(skyImg, 0, 0 - count, canvasWidth, canvasHeight * 3);
	} else {
		context.drawImage(skyImg, 0, -1100, canvasWidth, canvasHeight * 3);
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

const drawHill01 = (
	context: any,
	count: number,
	hill01Img: HTMLImageElement
) => {
	let hillWidth = context.canvas.width * 2;
	let hillY = context.canvas.height * 2;
	if (count >= 400) {
		if (count < 1200) {
			context.drawImage(
				hill01Img,
				0,
				hillY - count,
				hillWidth,
				context.canvas.height
			);
		} else {
			if (count < 1800) {
				let widthOffset = (count - 1200) * 2;
				hillWidth = hillWidth = context.canvas.width * 2 - widthOffset;
				context.drawImage(hill01Img, 0, 1, hillWidth, context.canvas.height);
			} else if (count > 1800 && count < 2000) {
				let heightOffset = count - 1800;
				let hillY = 1 + (count - 1800);
				context.drawImage(
					hill01Img,
					0,
					1 + hillY,
					context.canvas.width,
					context.canvas.height - heightOffset
				);
			} else {
				context.drawImage(
					hill01Img,
					0,
					200,
					context.canvas.width,
					context.canvas.height - 200
				);
			}
		}
	}
};

const drawHill02 = (
	context: any,
	count: number,
	hill02Img: HTMLImageElement
) => {
	let hillWidth = context.canvas.width * 2;
	let hillX = 0 - context.canvas.width;
	if (count >= 700) {
		if (count < 1300) {
			let offsetY = count - 700;
			context.drawImage(
				hill02Img,
				hillX,
				context.canvas.height - offsetY,
				hillWidth,
				context.canvas.height
			);
		} else if (count < 1900) {
			let offsetWidth = count - 1300;
			console.log(
				"hillWidth - offsetWidth * 2 : ",
				hillWidth - offsetWidth * 2
			);
			context.drawImage(
				hill02Img,
				hillX + offsetWidth * 2,
				context.canvas.height - 600,
				hillWidth - offsetWidth * 2,
				context.canvas.height
			);
		} else {
			if (count <= 2000) {
				let heightOffset = count - 2000;
				let hillY = count - 2000;
				context.drawImage(
					hill02Img,
					-2,
					hillY,
					1202,
					context.canvas.height - heightOffset
				);
			} else {
				context.drawImage(
					hill02Img,
					-2,
					context.canvas.height - 600,
					1202,
					context.canvas.height
				);
			}
		}
	}
};
