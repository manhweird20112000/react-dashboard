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
			className="">
			{icon ? <span className="mr-2">{icon}</span> : <></>}{' '}
			<span className="">{label}</span>
			{match && <div className="w-[1px] bg-white h-2 absolute right-0"></div>}
		</div>
	);
}
