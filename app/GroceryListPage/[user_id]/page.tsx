import { GroceryList, getGroceryListsById } from "@/app/(models)/GroceryList";

const GroceryListPage = async ({ params }: any) => {
	const userId = params.user_id;
	const currency = "$";

	const groceryLists = await getGroceryListsById(userId);
	const selectedGroceryList: GroceryList | undefined = groceryLists
		? groceryLists.foundGroceryLists
		: undefined;

	const mappedStores = selectedGroceryList?.items.itemData
		.map((item) => {
			return item.stores;
		})
		.flat(1);

	const storePriceCalculator = (id: string) =>
		mappedStores
			?.map((store) => {
				if (store.name === id) {
					return store.price;
				}
				return;
			})
			.filter((item) => item !== undefined)
			.reduce(function (a, b) {
				return a + b;
			});

	const storeTotals = [
		storePriceCalculator("Walmart"),
		storePriceCalculator("Loblaws"),
		storePriceCalculator("noFrills"),
		storePriceCalculator("Galleria"),
	];

	const storeGridHeader = ["Walmart", "Loblaws", "noFrills", "Galleria"];

	console.log("Mapped : ", mappedStores);
	console.log("Totals : ", storeTotals);

	if (selectedGroceryList) {
		return (
			<div className="p-[20px]">
				<div className="border border-1 border-slate-300 drop-shadow-lg drop-shadow-grey-900/10 rounded py-[20px]">
					<div className="w-full grid grid-row-5">
						<div
							key={Math.random()}
							className="inline-flex justify-between font-bold striped"
						>
							<div className="w-[200px] pl-[8px]">Ingredients</div>
							{storeGridHeader.map((store) => {
								return (
									<div key={Math.random()} className="w-[100px] text-center">
										{store}
									</div>
								);
							})}
						</div>
						{selectedGroceryList.items.itemData.map((ingredient) => {
							return (
								<>
									<div
										key={Math.random()}
										className="inline-flex justify-between striped"
									>
										<div className="w-[200px] pl-[8px]">{ingredient.item}</div>
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
						<div
							key={Math.random()}
							className="inline-flex justify-between font-bold striped"
						>
							<div className="w-[200px] pl-[8px]">Totals</div>
							{storeTotals.map((store) => {
								return (
									<div key={Math.random()} className="w-[100px] text-center">
										{store?.toFixed(2)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	} else return <div>No grocery list</div>;
};

export default GroceryListPage;
