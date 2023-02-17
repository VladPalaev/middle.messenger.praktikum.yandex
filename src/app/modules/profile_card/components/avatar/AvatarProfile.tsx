import React from "mine-react";
import { ModalChangeAvatar } from "./ModalChangeAvatar";

interface IAvatarProfile {
	url: string;
}

export const AvatarProfile = ({ url, setUserAvatar }: IAvatarProfile) => {
	const [isOpenModal, setIsOpenModal] = React.useState(false);

	const handleChangeAvatar = () => {
		if (!isOpenModal) {
			setIsOpenModal(true);
			return;
		}
		setIsOpenModal(false);
	};

	return (
		<>
			<div className="profile-avatar__container">
				<div className="profile-avatar">
					<img
						src={url}
						alt="Аватарка"
						className="profile-avatar__img"
					></img>
				</div>
			</div>
			<button onClick={handleChangeAvatar}>cli</button>
			{isOpenModal ? (
				<ModalChangeAvatar setUserAvatar={setUserAvatar} />
			) : null}
		</>
	);
};
