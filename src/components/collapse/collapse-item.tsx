interface Props {
	label: string;
	icon?: React.ReactNode;
	onPress(): void;
}
export function CollapseItem(props: Props) {
	const { icon, label, onPress } = props;
	return (
		<div className="collapse-item px-2">
			{icon ? <span className="mr-2">{icon}</span> : <></>} <span>{label}</span>
		</div>
	);
}
