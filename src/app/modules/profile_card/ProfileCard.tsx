import React from "mine-react";
import { AvatarProfile } from "./components/avatar/AvatarProfile";
import { SettingCard } from "./components/setting_card/SettingCard";
import { ProfileInfo } from "./components/profile-info/ProfileInfo";

export const ProfileCard = () => {
	return (
		<div className="profile">
			<AvatarProfile url="https://cdn.7days.ru/pic/5ec/979951/1432589/86.jpg" />

			<ProfileInfo nick_name="владзеленый" />

			<SettingCard />
		</div>
	);
};
