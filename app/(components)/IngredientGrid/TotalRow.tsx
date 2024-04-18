interface Props {
	price: number;
	name: string;
}

const TotalRow = ({ price, name }: Props) => {
	return (
		<div key={name} className="w-[100px] text-center">
			${price}
		</div>
	);
};

export default TotalRow;
