import React from "mine-react";
import { ButtonBack } from "../../../lib/components";
import { ProfileCard } from "../../modules";
import urlBtnBack from "../../../../static/icons/btn_back.svg";
import { Link } from "../../../lib/core/Router";

export const ProfilePage = () => {
	return (
		<main className="profile-main">
			<div className="back-chats fx fx-c-c">
				<Link to="/messenger">
					<ButtonBack type="button" url={urlBtnBack} />
				</Link>
			</div>
			<ProfileCard />
		</main>
	);
};
