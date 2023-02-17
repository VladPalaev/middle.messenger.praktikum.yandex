import React from "mine-react";
import { Button, InputInteractiveHint } from "../../../../../lib/components";
import { createChat } from "../../models/createChat";

export const ModalAddChat = (props) => {
	const [titleChat, setTitleChat] = React.useState("");

	const handleCreateChat = async (e: Event) => {
		e.preventDefault();
		await createChat(titleChat);
		//todo изменил обратботчик на форму, а был на клике
		props.setOpenModal(true);
	};

	return (
		<div className="modal-add-chat__overlay">
			<div className="modal-add-chat__container">
				<h2 className="modal-add-chat__title">Введи имя чата</h2>
				<form
					method="POST"
					className="modal-add-chat__form"
					onSubmit={handleCreateChat}
				>
					<InputInteractiveHint
						id="title"
						label="Название чата"
						name="title"
						placeholder=" "
						type="text"
						value={titleChat}
						onInput={(e) => setTitleChat(e.target.value)}
					/>
					<Button
						className="btn modal-add-chat__btn"
						type="submit"
						label="Добавить"
					/>
				</form>
			</div>
		</div>
	);
};
