import React from "mine-react";
import imgAttachFile from "../../../../../../static/icons/attach_file.svg";
import imgSendMsg from "../../../../../../static/icons/btn_send_msg.svg";
import { InputText } from "../../../../../lib/components";
import { validateInputSendMsg } from "../../../../../lib/core/validation/app/sendMessageValidation";

export const InputSendMsg = (props) => {
	const [message, setMessage] = React.useState("");

	const handleSendMessage = () => {
		const { valid, errors } = validateInputSendMsg("message", message);
		if (valid) {
			props.updateMessages({ text: message });
		}
		setMessage("");
	};
	return (
		<div className="chat-input__container">
			<button className="chat-input__attach btn" type="button">
				<img src={imgAttachFile} alt="Прикрепить файлы" />
			</button>
			<InputText
				type="text"
				className="chat-input__field"
				placeholder="Сообщения"
				name="message"
				value={message}
				onChange={(e: Event) => setMessage(e.target.value)}
			/>

			<button
				onClick={handleSendMessage}
				className="chat-input__send-message btn"
				type="button"
			>
				<img src={imgSendMsg} alt="Отправить сообщение" />
			</button>
		</div>
	);
};
