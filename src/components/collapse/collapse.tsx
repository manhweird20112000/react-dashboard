import { IconArrowDown, IconArrowUp } from 'assets/icons';
import { theme } from 'configs';
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
		<div className="my-2">
			<div
				className="my-1 cursor-pointer collapse flex items-center justify-between"
				onClick={() => handleCollapse()}>
				<div
					style={{ opacity: match ? 1 : 0.8 }}
					className="flex items-center my-1 xl:justify-start lg:justify-start justify-start md:justify-center">
					{icon ? (
						<span className="xl:mr-2 lg:mr-2 md:m-0 mr-2">{icon}</span>
					) : (
						<></>
					)}
					<span className="text-white font-medium text-lg block xl:block lg:block md:hidden">
						{label}
					</span>
				</div>
				{type === 'COLLAPSE' &&
					(hide ? (
						<IconArrowUp fill={theme.whiteColor} />
					) : (
						<IconArrowDown fill={theme.whiteColor} />
					))}
				{match && type !== 'COLLAPSE' && (
					<div className="w-[2px] h-6 bg-white rounded-lg absolute top-1/2  -translate-y-1/2 right-1"></div>
				)}
			</div>
			{hide && <div className="">{children}</div>}
		</div>
	);
}
