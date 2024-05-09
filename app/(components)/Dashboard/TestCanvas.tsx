export const draw = (
	context: any,
	count: number,
	skyImg: HTMLImageElement,
	mountainImg: HTMLImageElement,
	hill01Img: HTMLImageElement,
	hill02Img: HTMLImageElement,
	hill03Img: HTMLImageElement,
	canvasHeight: number,
	canvasWidth: number
) => {
	context.clearRect(0, 0, canvasWidth, canvasHeight);

	drawSky(context, count, skyImg, canvasWidth, canvasHeight);
};

const drawSky = (
	context: any,
	count: number,
	skyImg: HTMLImageElement,
	canvasWidth: number,
	canvasHeight: number
) => {
	let finalY = canvasHeight * 2;
	let skyHeight = canvasHeight * 3;

	if (count <= finalY) {
		context.drawImage(skyImg, 0, 0 - count, canvasWidth, skyHeight);
	} else {
		context.drawImage(skyImg, 0, -finalY, canvasWidth, skyHeight);
	}
};

// const drawMountain = (
// 	context: any,
// 	count: number,
// 	mountainImg: HTMLImageElement,
// 	canvasHeight: number,
// 	canvasWidth: number
// ) => {
// 	let mountainWidth = canvasWidth * 2;
// 	let mountainX = 0 - canvasWidth / 4;
// 	if (count <= 1001) {
// 		context.drawImage(
// 			mountainImg,
// 			mountainX,
// 			canvasHeight * 2 - count,
// 			mountainWidth,
// 			canvasHeight
// 		);
// 	} else {
// 		if (count > 1001 && count <= 1600) {
// 			let widthOffset = count - 1001;
// 			let xOffset = count - 1001;
// 			context.drawImage(
// 				mountainImg,
// 				mountainX + xOffset / 2,
// 				200,
// 				mountainWidth - widthOffset * 2,
// 				canvasHeight
// 			);
// 		} else {
// 			context.drawImage(mountainImg, 0, 200, canvasWidth, canvasHeight);
// 		}
// 	}
// };

// const drawHill01 = (
// 	context: any,
// 	count: number,
// 	hill01Img: HTMLImageElement,
// 	canvasHeight: number,
// 	canvasWidth: number
// ) => {
// 	let hillWidth = canvasWidth * 2;
// 	let hillY = canvasHeight * 2;
// 	if (count >= 400) {
// 		if (count < 1200) {
// 			context.drawImage(hill01Img, 0, hillY - count, hillWidth, canvasHeight);
// 		} else {
// 			if (count < 1800) {
// 				let widthOffset = (count - 1200) * 2;
// 				hillWidth = hillWidth = canvasWidth * 2 - widthOffset;
// 				context.drawImage(hill01Img, 0, 1, hillWidth, canvasHeight);
// 			} else if (count > 1800 && count < 2000) {
// 				let heightOffset = count - 1800;
// 				let hillY = 1 + (count - 1800);
// 				context.drawImage(
// 					hill01Img,
// 					0,
// 					1 + hillY,
// 					canvasWidth,
// 					canvasHeight - heightOffset
// 				);
// 			} else {
// 				context.drawImage(hill01Img, 0, 200, canvasWidth, canvasHeight - 200);
// 			}
// 		}
// 	}
// };

// const drawHill02 = (
// 	context: any,
// 	count: number,
// 	hill02Img: HTMLImageElement,
// 	canvasHeight: number,
// 	canvasWidth: number
// ) => {
// 	let hillWidth = canvasWidth * 2;
// 	let hillX = 0 - canvasWidth;
// 	if (count >= 700) {
// 		if (count < 1300) {
// 			let offsetY = count - 700;
// 			context.drawImage(
// 				hill02Img,
// 				hillX,
// 				canvasHeight - offsetY,
// 				hillWidth,
// 				canvasHeight
// 			);
// 		} else if (count < 1900) {
// 			let offsetWidth = count - 1300;
// 			context.drawImage(
// 				hill02Img,
// 				hillX + offsetWidth * 2,
// 				canvasHeight - 600,
// 				hillWidth - offsetWidth * 2,
// 				canvasHeight
// 			);
// 		} else {
// 			if (count <= 2000) {
// 				let heightOffset = count - 2000;
// 				let hillY = count - 2000;
// 				context.drawImage(
// 					hill02Img,
// 					-2,
// 					hillY,
// 					1202,
// 					canvasHeight - heightOffset
// 				);
// 			} else {
// 				context.drawImage(
// 					hill02Img,
// 					-2,
// 					canvasHeight - 600,
// 					1202,
// 					canvasHeight
// 				);
// 			}
// 		}
// 	}
// };

// const drawHill03 = (
// 	context: any,
// 	count: number,
// 	hill03Img: HTMLImageElement,
// 	canvasHeight: number,
// 	canvasWidth: number
// ) => {
// 	if (count >= 1300) {
// 		if (count < 1850) {
// 			let offsetHillY = count - 1300;
// 			context.drawImage(
// 				hill03Img,
// 				-2,
// 				canvasHeight - offsetHillY,
// 				1202,
// 				canvasHeight
// 			);
// 		} else {
// 			let offsetHillY = count - 1850;
// 			context.drawImage(hill03Img, -2, 50, 1202, canvasHeight);
// 		}
// 	}
// };
