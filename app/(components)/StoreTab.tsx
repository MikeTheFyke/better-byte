import React from "react";

interface Props {
	store: string;
	total: string | number;
	allItems: boolean;
	key: string;
}

const StoreTab = ({ store, total, allItems, key }: Props) => {
	let tabStyles: string = "";

	if (store === "Walmart") {
		tabStyles = "text-[#FFC220] bg-[#0071CE] rounded-br-[60px] pl-[10px]";
	} else if (store === "Loblaws") {
		tabStyles =
			"text-black bg-[#FF7F00] rounded-bl-[60px] justify-self-end pl-[22px]";
	} else if (store === "noFrills") {
		tabStyles = "text-black bg-[#FBDD00] rounded-tr-[60px] pl-[10px]";
	} else if (store === "Galleria") {
		tabStyles =
			"text-[#59AD40] bg-white rounded-tl-[60px] justify-self-end pl-[22px]";
	}

	return (
		<div className={`store-tab ${tabStyles}`} key={key}>
			${total}
		</div>
	);
};

export default StoreTab;
