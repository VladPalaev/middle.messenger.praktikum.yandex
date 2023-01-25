import React from "mine-react";
import { ButtonBack } from "../../../lib/components";
import { ProfileCard } from "../../modules";
import urlBtnBack from "../../../../static/icons/btn_back.svg";

export const ProfilePage = () => {
	return (
		<main className="profile-main">
			<div className="back-chats fx fx-c-c">
				<ButtonBack type="button" url={urlBtnBack} />
			</div>
			<ProfileCard />
		</main>
	);
};
