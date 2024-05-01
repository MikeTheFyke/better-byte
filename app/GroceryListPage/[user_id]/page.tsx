import { GroceryList, getGroceryListsById } from "@/app/(models)/GroceryList";

const GroceryListPage = async ({ params }: any) => {
	const userId = params.user_id;
	const currency = "$";

	const groceryLists = await getGroceryListsById(userId);
	const selectedGroceryList: GroceryList | undefined = groceryLists
		? groceryLists.foundGroceryLists
		: undefined;

	console.log("selectedGroceryList : ", selectedGroceryList);

	const mappedStores = selectedGroceryList?.items.itemData
		.map((item) => {
			return item.stores;
		})
		.flat(1);

	const walmartPrices = mappedStores
		?.map((store) => {
			if (store.name === "Walmart") {
				return store.price;
			}
			return;
		})
		.filter((item) => item !== undefined)
		.reduce(function (a, b) {
			return a + b;
		});

	const loblawsPrices = mappedStores
		?.map((store) => {
			if (store.name === "Loblaws") {
				return store.price;
			}
			return;
		})
		.filter((item) => item !== undefined)
		.reduce(function (a, b) {
			return a + b;
		});

	const noFrillsPrices = mappedStores
		?.map((store) => {
			if (store.name === "noFrills") {
				return store.price;
			}
			return;
		})
		.filter((item) => item !== undefined)
		.reduce(function (a, b) {
			return a + b;
		});

	const galleriaPrices = mappedStores
		?.map((store) => {
			if (store.name === "Galleria") {
				return store.price;
			}
			return;
		})
		.filter((item) => item !== undefined)
		.reduce(function (a, b) {
			return a + b;
		});

	console.log("Mapped : ", mappedStores);
	console.log("walmartPrices : ", walmartPrices);
	console.log("loblawsPrices : ", loblawsPrices);
	console.log("noFrillsPrices : ", noFrillsPrices);
	console.log("galleriaPrices : ", galleriaPrices);

	if (selectedGroceryList) {
		return (
			<div className="p-[20px]">
				<div className="border border-1 border-slate-300 drop-shadow-lg drop-shadow-grey-900/10 rounded py-[20px]">
					<div className="w-full grid grid-row-5">
						{selectedGroceryList.items.itemData.map((ingredient) => {
							return (
								<>
									<div
										key={Math.random()}
										className="inline-flex justify-between striped"
									>
										<div className="w-[200px]">{ingredient.item}</div>
										{ingredient.stores.map((store) => {
											return (
												<>
													<div
														key={Math.random()}
														className="w-[100px] text-center"
													>
														{store.price > 0
															? `${currency}${store.price.toFixed(2)}`
															: "N/A"}
													</div>
												</>
											);
										})}
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
		);
	} else return <div>No grocery list</div>;
};

export default GroceryListPage;
