interface Props {
	fill?: string;
	size?: number;
}
export function IconArrowUp(props: Props) {
	const { fill = '#1E2124', size = 24 } = props;
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M17 14L12 10L7 14"
				stroke={fill}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
