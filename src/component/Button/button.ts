import Component from "../../utils/Component";

interface IButtonProps {
	label: string;
	onClick?: () => void;
}

export default class Button extends Component<IButtonProps> {
	public static testName = "Button";
	constructor({ label, onClick }: IButtonProps) {
		super({
			label,
			events: {
				click: onClick,
			},
		});
	}
	render() {
		return `<div>
					<button type="button" >{{ label }}</button>
				</div>`;
	}
}
