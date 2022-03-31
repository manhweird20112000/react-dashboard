import { IconArrowDown } from 'assets/icons';
import { IconArrowUp } from 'assets/icons/icon-arrow-up';
import { useState } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface Props {
	children?: React.ReactNode;
	label?: string;
	icon?: React.ReactNode;
	to?: string | undefined | null;
	type: string;
}
export function Collapse(props: Props) {
	const { children, icon, label, to, type } = props;
	const navigate = useNavigate();
	const resolved = useResolvedPath(`${to}`);
	const match = useMatch({ path: resolved.pathname, end: true });
	const [hide, setHide] = useState<Boolean>(false);

	function handleCollapse() {
		if (type === 'COLLAPSE') {
			setHide(!hide);
		} else {
			navigate(`${to}`);
		}
	}

	return (
		<div className="transition-all">
			<div
				style={{ backgroundColor: match ? 'red' : 'transparent' }}
				className="flex items-center justify-between p-2 cursor-pointer my-1"
				onClick={() => handleCollapse()}>
				<div className="flex items-center">
					{icon ? <span className="mr-2">{icon}</span> : <></>}
					<span className="font-semibold">{label}</span>
				</div>
				{type === 'COLLAPSE' && (hide ? <IconArrowUp /> : <IconArrowDown />)}
			</div>
			{hide && <div className="my-1">{children}</div>}
		</div>
	);
}
