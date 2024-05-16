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
	drawMountain(context, count, mountainImg, canvasWidth, canvasHeight);
	drawHill01(context, count, hill01Img, canvasWidth, canvasHeight);
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

const drawMountain = (
	context: any,
	count: number,
	mountainImg: HTMLImageElement,
	canvasWidth: number,
	canvasHeight: number
) => {
	let mountainWidth = canvasWidth * 2;
	let mountainY = canvasHeight * 2;
	let mountainX = 0 - canvasWidth / 4;
	let offsetY = mountainY - canvasHeight / 3;
	if (count <= offsetY) {
		context.drawImage(
			mountainImg,
			mountainX,
			mountainY - count,
			mountainWidth,
			canvasHeight
		);
	} else {
		let offsetX = count - offsetY;
		let finalX = mountainX + offsetX / 2;
		let width = mountainWidth - offsetX * 2;
		let finalY = canvasHeight / 2.9;
		if (offsetX <= canvasWidth / 2) {
			context.drawImage(mountainImg, finalX, finalY, width, canvasHeight);
		} else {
			let test = Math.floor(offsetX - canvasWidth / 2) / 2;
			if (test <= canvasHeight / 3) {
				context.drawImage(
					mountainImg,
					0,
					finalY - test,
					canvasWidth,
					canvasHeight - test / 2
				);
			} else {
				context.drawImage(
					mountainImg,
					0,
					finalY - canvasHeight / 3,
					canvasWidth,
					canvasHeight - canvasHeight / 6
				);
			}
		}
	}
};

const drawHill01 = (
	context: any,
	count: number,
	hill01Img: HTMLImageElement,
	canvasWidth: number,
	canvasHeight: number
) => {
	let start = canvasHeight;
	let hillWidth = canvasWidth * 2;
	let hillHeight = canvasHeight;
	let hillY = canvasHeight * 2;
	let offsetY = hillY - canvasHeight / 3;

	// if (count <= offsetY) {
	// let offsetY = count - canvasHeight;
	// console.log("canvasHeight : ", canvasHeight);
	// console.log("canvasWidth : ", canvasWidth);
	// console.log("Count : ", count);
	if (count <= canvasWidth) {
		context.drawImage(hill01Img, 0, hillY - count, hillWidth, hillHeight);
	} else {
		hillY = hillY - canvasWidth;
		let offsetWidth = count - canvasWidth;
		if (count < 2600) {
			// console.log("Phase One");
			context.drawImage(
				hill01Img,
				0,
				hillY,
				hillWidth - offsetWidth,
				hillHeight
			);
		} else {
			context.drawImage(hill01Img, 0, hillY, hillWidth - 2600, hillHeight);
		}
	}

	// if (count <= canvasHeight + canvasHeight / 3) {
	// 	context.drawImage(
	// 		hill01Img,
	// 		0,
	// 		canvasHeight - offsetY,
	// 		hillWidth,
	// 		hillHeight
	// 	);
	// }
	// else {
	// 	context.drawImage(
	// 		hill01Img,
	// 		0,
	// 		canvasHeight - canvasHeight / 3,
	// 		hillWidth,
	// 		hillHeight
	// 	);
	// }
	// }
	// else {
	// 	context.drawImage(hill01Img, 0, offsetY, hillWidth, hillheight);
	// }
};

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
