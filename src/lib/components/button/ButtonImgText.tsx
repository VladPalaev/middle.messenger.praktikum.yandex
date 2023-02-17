import React from "mine-react";

interface IButtonImgText {
	className?: string;
	onClick: () => void;
	urlImg: string;
	label: string;
	altText: string;
}

export const ButtonImgText = ({
	label,
	urlImg,
	altText,
	className,
	onClick,
}: IButtonImgText) => {
	return (
		<div className="btnImgText__container">
			<button
				onClick={onClick}
				className={`btn btnImgText ${className ?? ""}`}
			>
				<img src={urlImg} alt={altText} />
				<span>{label}</span>
			</button>
		</div>
	);
};
