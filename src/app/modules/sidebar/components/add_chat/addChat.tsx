import React from "mine-react";
import { ButtonImgText } from "../../../../../lib/components";
import iconPlus from "../../../../../../static/icons/addChatPlus.png";
import { ModalAddChat } from "./ModalAddChat";

export const AddChat = () => {
	const [openModal, setOpenModal] = React.useState(false);

	return (
		<div>
			<ButtonImgText
				onClick={() => setOpenModal(true)}
				className="btn-add-chat"
				altText="Добавить чат"
				label="Добавить чат"
				urlImg={iconPlus}
			/>
			{openModal ? <ModalAddChat setOpenModal={setOpenModal} /> : null}
		</div>
	);
};
