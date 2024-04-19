"use client";
import React from "react";

interface Props {
	displayValue: string | number;
	currency: boolean;
	styles?: string;
}

const IngredientRow = ({ displayValue, currency, styles }: Props) => {
	return (
		<div key={displayValue} className={`w-[100px] text-center ${styles}`}>
			{currency ? "$" : ""}
			{displayValue}
		</div>
	);
};

export default IngredientRow;
