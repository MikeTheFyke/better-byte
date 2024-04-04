import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteCard = () => {
	return (
		<FontAwesomeIcon
			icon={faTrashCan}
			className="text-red-400 hover:cursor-pointer hover:text-red-200"
		/>
	);
};
export default DeleteCard;
