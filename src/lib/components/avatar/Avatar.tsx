import React from "mine-react";

interface IAvatar {
	url: string;
}

export const Avatar = ({ url }: IAvatar) => {
	return (
		<div className="avatar">
			<img className="avatar__image" src={url} alt="" />
		</div>
	);
};
