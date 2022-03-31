interface Props {
	fill?: string;
	size?: number;
}
export function IconHome(props: Props) {
	const { fill = '#1E2124', size = 24 } = props;
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				opacity="0.4"
				d="M2.49456 10.709C1.72467 9.83296 1.87128 8.48572 2.81158 7.79565L9.65864 2.77075C11.0603 1.74213 12.968 1.74317 14.3685 2.77333L21.1902 7.79105C22.1221 8.47656 22.2738 9.80967 21.5196 10.6868L21.0523 11.2303C20.5874 11.7709 20.3318 12.4602 20.3318 13.1731V18.0256C20.3318 20.2206 18.5516 22 16.3556 22H7.67342C5.47744 22 3.69725 20.2206 3.69725 18.0256V13.2008C3.69725 12.4767 3.43361 11.7775 2.95555 11.2335L2.49456 10.709Z"
				fill={fill}
			/>
			<path
				d="M10 18H14"
				stroke={fill}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}
