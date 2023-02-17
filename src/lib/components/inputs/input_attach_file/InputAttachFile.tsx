import React from "mine-react";

interface IInputAttachFile {
	defaultHintValue: string;
	id: string;
	name;
	urlIcon: string;
	onClick?: (any) => void;
	multiple: true | false;
}

export const InputAttachFile = ({
	id,
	urlIcon,
	name,
	multiple,
	defaultHintValue,
}: IInputAttachFile) => {
	const [nameFile, setNameFile] = React.useState("");

	const handleLogChoseFile = (e) => {
		if (e.target.files.length == 0) {
			setNameFile(defaultHintValue);
			return;
		}
		if (e.target.files.length > 1) {
			setNameFile(`${e.target.files.length} файлов`);
			return;
		}

		setNameFile(e.target.files[0].name.slice(0, 15));
	};

	return (
		<div className="input-attach__wrapper">
			<input
				className="input-attach__input-file"
				type="file"
				name={name}
				id={id}
				multiple={multiple}
				onChange={handleLogChoseFile}
			/>
			<label className="input-attach__button" htmlFor={id}>
				<span className="input-attach__icon-wrapper">
					<img
						className="input-attach__icon"
						src={urlIcon}
						alt="Аватарка пользователя"
					/>
				</span>
				<span className="input-attach__label">
					{nameFile !== "" ? nameFile : defaultHintValue}
				</span>
			</label>
		</div>
	);
};
