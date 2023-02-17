import React from "mine-react";
import { Button, InputAttachFile } from "../../../../../lib/components";
import { User } from "../../../../api/users";

export const ModalChangeAvatar = ({ setUserAvatar }) => {
	const [isLoadingChangeAvatar, setIsLoadingChangeAvatar] =
		React.useState(false);

	const handleSubmitForm = async (e: Event) => {
		setIsLoadingChangeAvatar(true);
		e.preventDefault();
		const form = new FormData(e.target);
		const reader = new FileReader();
		const file = form.get("avatar");

		reader.readAsDataURL(file);

		reader.onload = (e) => {
			console.log(e);
			setUserAvatar(e.target?.result);
		};

		console.log(form);
		try {
			const response = await new User().changeAvatar(form.get("avatar"));
			setIsLoadingChangeAvatar(false);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			<div className="modal-add-chat__overlay">
				<div className="modal-add-chat__container">
					<h2 className="modal-add-chat__title">Загрузите файл</h2>
					<form
						method="POST"
						className="modal-add-chat__form"
						onSubmit={handleSubmitForm}
					>
						<InputAttachFile
							name="avatar"
							id="avatar"
							multiple={false}
							urlIcon={
								"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO2ZP0oDQRSHPzQGRHMRY+EZRC0UxEJvIYlReyuNnsBe7Y1nEA8gJEZE0SapRS00RUYGXmBcN2HNBudlmR/8YJPHwnzvHwMLQUFBSZUHToA2YBL4BdhAoY4TArj+BBZQptYQINZNYBpFMil8SkZAzD+7JaOQH3cQI65mBaSdFRCTaZAgbbpR0Cbmj76OA8nMjJgx9S/5PlAACRXBfzuZMCP4z7wJFcF/tk2oCP4zbEJFRL4zGyoSle/MZq4idWAHKAIzYvtcARrjAPIFbAOT9JeNlYCOVhALsRRzpiugFvP/sgOzpgnEVmJQcuNUltgzkNMAUh/QTmYAiD38ncS3NIDYzDIEiNWuxC9QADLH8CDzEn/UAFJwBtskdG8BFOT3hyYQe7ik71xGQN40gBRH0Fr3GkAqKUD2JX42io+had1IsX6bEt90A1WPVSkNAVKR2AMw5QbyAuOjMh25dkRVcwbb1Yq80wXWUaIDB6YcvW5ElJNK9O5ZRyjToWTXyMzsykaaFdvnPedK0hWICRRqEXhK0IZ2JtS0Uz/Z7bUqd6db4BV4l0qcy3b6Mdg9fQONMkLdWPzlBwAAAABJRU5ErkJggg=="
							}
							defaultHintValue="Выбрать файл на компьютере"
						/>

						<Button
							className="btn btn-login btn-change-avatar"
							label="Поменять"
							type="submit"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
