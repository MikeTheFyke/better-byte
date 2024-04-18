"use client";
import React from "react";

interface Props {
	price: number;
	name: string;
}

const IngredientRow = ({ price, name }: Props) => {
	const displayValue = price === 0 ? "N/A" : `${price}`;
	return (
		<div key={name} className="w-[100px] text-center">
			{displayValue}
		</div>
	);
};

export default IngredientRow;
