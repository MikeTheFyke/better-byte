export type GroceryList = {
	id: String;
	items: GroceryListItem;
};

export type GroceryListItem = {
	itemData: Array<GroceryStoreItemData>;
};

export type GroceryStoreItemData = {
	item: String;
	quantity: number;
	stores: Array<GroceryStorePriceData>;
};

export type GroceryStorePriceData = {
	name: String;
	price: number;
	unit: String;
};

export const getGroceryListsById = async (id: string) => {
	console.log("ID : ", id);
	try {
		const res = await fetch(`http://localhost:3000/api/GroceryLists/${id}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to get grocery list.");
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};
