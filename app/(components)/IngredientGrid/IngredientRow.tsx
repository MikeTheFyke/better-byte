"use client";
import React from "react";

interface Props {
	displayValue: string | number;
}

const IngredientRow = ({ displayValue }: Props) => {
	return (
		<div key={displayValue} className="w-[100px] text-center">
			{displayValue}
		</div>
	);
};

export default IngredientRow;
