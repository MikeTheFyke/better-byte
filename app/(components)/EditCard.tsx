import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditCard = () => {
	return (
		<FontAwesomeIcon
			icon={faPencil}
			className="text-blue-400 hover:cursor-pointer hover:text-blue-600  text-4xl p-1"
		/>
	);
};

export default EditCard;
