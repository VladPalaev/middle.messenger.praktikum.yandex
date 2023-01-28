import React from "mine-react";
import { Button } from "../../../../../lib/components";

export const SettingCard = (props) => {
	return (
		<div className="profile-setting__container">
			<div className="profile-setting__btn-box">
				<Button
					onClick={props.handleEditProfile}
					type="button"
					className="profile-setting__btn btn"
					label="Изменить данные"
				/>
			</div>
			<div className="profile-setting__btn-box">
				<Button
					type="button"
					className="profile-setting__btn btn"
					label="Изменить пароль"
				/>
			</div>
			<div className="profile-setting__btn-box">
				<Button
					type="button"
					className="profile-setting__btn btn btn-logout"
					label="Выйти"
				/>
			</div>
		</div>
	);
};
