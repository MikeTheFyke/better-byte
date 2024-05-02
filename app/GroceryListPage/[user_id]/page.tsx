import GroceryGridIngredients from "@/app/(components)/GroceryGrid/GroceryGridIngredients";
import { GroceryList, getGroceryListsById } from "@/app/(models)/GroceryList";
import { availableLocations } from "@/app/common/common";

const GroceryListPage = async ({ params }: any) => {
	const userId = params.user_id;
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

	if (selectedGroceryList) {
		return (
			<div className="p-[20px]">
				<div className="w-full px-[8px] text-center mb-[8px]">
					<h1 className="font-bold text-black text-4xl">Your Grocery List</h1>
				</div>
				<div className="border border-1 border-slate-300 drop-shadow-lg drop-shadow-grey-900/10 rounded py-[8px] px-[8px]">
					<div className="w-full grid grid-row-6">
						<div
							key={Math.random()}
							className="inline-flex justify-between font-semibold groceryGridStriped mb-[8px]"
						>
							<div className="w-[200px] pl-[8px]">Ingredients</div>
							<div className="w-[100px] text-center">Quantity</div>
							{availableLocations.map((store) => {
								return (
									<div key={Math.random()} className="w-[100px] text-center">
										{store}
									</div>
								);
							})}
						</div>
						<GroceryGridIngredients
							ingredients={selectedGroceryList.items.itemData}
						/>
						<div
							key={Math.random()}
							className="inline-flex justify-between font-bold groceryGridStriped mt-[8px] border border-1 border-slate-300 drop-shadow-lg drop-shadow-grey-900/10 rounded"
						>
							<div className="w-[200px] pl-[8px]">Totals</div>
							<div className="w-[100px] pl-[8px]"></div>
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
