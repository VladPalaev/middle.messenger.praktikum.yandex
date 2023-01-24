import React from "mine-react";
import { InputText } from "../../../../../lib/components";
import icon from "../../../../../../static/icons/search_chat.svg";

export const SearchChat = () => {
	return (
		<div className="search__container">
			<InputText
				type="text"
				className="search-chat__field"
				id="search-chat__field"
				placeholder=" "
			/>
			<label className="search-chat__label" for="search-chat__field">
				<img className="search-chat__img" src={icon} alt="" />
			</label>
		</div>
	);
};
