import React from "mine-react";
import { AvatarProfile } from "./components/avatar/AvatarProfile";
import { SettingCard } from "./components/setting_card/SettingCard";
import { ProfileInfo } from "./components/profile-info/ProfileInfo";
import { Api } from "../../api";

export const ProfileCard = () => {
	const [userData, setUserData] = React.useState(null);
	const [userAvatar, setUserAvatar] = React.useState(null);

	React.useEffect(async() => {
		try{
			const {avatar, ...dataField} = await new Api.auth.User().get();
			setUserData(dataField);
			setUserAvatar(avatar);

		}
	});

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
			<AvatarProfile url={userAvatar} setUserAvatar={setUserAvatar}/>

			<ProfileInfo flag={flag} {...userData} />

			{!flag ? (
				<SettingCard handleEditProfile={handleEditProfile} />
			) : null}
		</div>
	);
};
