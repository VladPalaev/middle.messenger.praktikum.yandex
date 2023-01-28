import React from "mine-react";
import { AvatarProfile } from "./components/avatar/AvatarProfile";
import { SettingCard } from "./components/setting_card/SettingCard";
import { ProfileInfo } from "./components/profile-info/ProfileInfo";

export const ProfileCard = () => {
	const dataUser = {
		email: "vladislav@yandex.ru",
		login: "vladPalev",
		first_name: "Влад",
		second_name: "Палаев",
		display_name: "vladYandex",
		phone: "+79275900001",
	};
	const [flag, setFlag] = React.useState(false);
	const handleEditProfile = () => {
		if (flag) {
			setFlag(false);
			console.log(flag);
			return;
		}
		setFlag(true);
		console.log(flag);
	};
	return (
		<div className="profile">
			<AvatarProfile url="https://cdn.7days.ru/pic/5ec/979951/1432589/86.jpg" />

			<ProfileInfo flag={flag} {...dataUser} />

			{!flag ? (
				<SettingCard handleEditProfile={handleEditProfile} />
			) : null}
		</div>
	);
};
