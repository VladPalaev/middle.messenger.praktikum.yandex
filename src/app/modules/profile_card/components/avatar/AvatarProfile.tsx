import React from "mine-react";

interface IAvatarProfile {
	url: string;
}

export const AvatarProfile = ({ url }: IAvatarProfile) => {
	return (
		<div className="profile-avatar__container">
			<div className="profile-avatar">
				<img
					src={url}
					alt="Аватарка"
					className="profile-avatar__img"
				></img>
			</div>
		</div>
	);
};
