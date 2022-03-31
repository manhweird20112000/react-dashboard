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
			style={{ backgroundColor: match ? 'green' : 'transparent' }}
			onClick={() => handleCollapse()}
			className="collapse-item px-2 flex items-center p-2 hover:bg-white cursor-pointer rounded-lg">
			{icon ? <span className="mr-2">{icon}</span> : <></>}{' '}
			<span className="font-semibold">{label}</span>
		</div>
	);
}
