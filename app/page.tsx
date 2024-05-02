import HeroCanvas from "./(components)/Dashboard/HeroCanvas";

const Dashboard = () => {
	return (
		<div className="p-[8px]">
			<div className="w-full flex justify-center">
				<HeroCanvas height="600px" width="1200px" />
			</div>
		</div>
	);
};

export default Dashboard;
