import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface Props {
	label: string;
	icon?: React.ReactNode;
	to: string;
}
export function CollapseItem(props: Props) {
	const { icon, label, to = '' } = props;
	const navigate = useNavigate();
	const resolved = useResolvedPath(`${to}`);
	const match = useMatch({ path: resolved.pathname, end: true });
	function handleCollapse() {
		navigate(to);
	}
	return (
		<div
			style={{ opacity: match ? 1 : 0.8 }}
			onClick={() => handleCollapse()}
			className="collapse-item px-2 flex my-1.5 items-center p-2  cursor-pointer rounded-lg relative">
			{icon ? <span className="mr-2">{icon}</span> : <></>}{' '}
			<span className="font-medium text-white">{label}</span>
			{match && (
				<div className="w-[3px] bg-white h-7 rounded-xl absolute top-1/2 -translate-y-1/2 right-1"></div>
			)}
		</div>
	);
}
