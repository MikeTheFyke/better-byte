"use client";
import React from "react";

interface Props {
	items: any;
	currency: boolean;
	styles?: string;
}

const IngredientRow = ({ items, currency, styles }: Props) => {
	return (
		<div className="w-[400px] md:[420px]">
			<div className="flex justify-center stripedEnds">
				<div className="grid grid-cols-4 w-[400px]">
					{items.map((item: string | number, index) => {
						return (
							<div
								key={index + item}
								className={`w-[100px] text-center ${styles}`}
							>
								<h1 className="h-[30px]">
									{currency ? "$" : ""}
									{item}
								</h1>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default IngredientRow;
