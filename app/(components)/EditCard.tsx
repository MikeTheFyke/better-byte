import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditCard = () => {
	return (
		<FontAwesomeIcon
			icon={faPencil}
			className="text-blue-400 hover:cursor-pointer hover:text-blue-200"
		/>
	);
};

export default EditCard;
