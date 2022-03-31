import { IconArrowDown, IconArrowUp } from 'assets/icons';
import { useState } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import './styles.scss';

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
				className="collapse flex items-center justify-between p-2 cursor-pointer rounded-lg my-1.5 relative"
				onClick={() => handleCollapse()}>
				<div className="flex items-center">
					{icon ? (
						<span style={{ opacity: match ? 1 : 0.8 }} className="mr-2">
							{icon}
						</span>
					) : (
						<></>
					)}
					<span
						style={{ opacity: match ? 1 : 0.8 }}
						className="font-medium text-base text-white">
						{label}
					</span>
				</div>
				{type === 'COLLAPSE' && (hide ? <IconArrowUp /> : <IconArrowDown />)}
				{match && (
					<div className="w-[3px] bg-white h-7 rounded-xl absolute top-1/2 -translate-y-1/2 right-1"></div>
				)}
			</div>
			{hide && <div className="my-1">{children}</div>}
		</div>
	);
}
