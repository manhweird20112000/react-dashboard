import React from 'react';

interface Props {
	fill?: string;
	size?: number;
}

export function IconBell(props: Props) {
	const { fill = '#1E2124', size = 24 } = props;

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 20C13.385 20 14.5633 19.1652 15 18H9C9.43668 19.1652 10.615 20 12 20Z"
				fill={fill}
			/>
			<path
				opacity="0.4"
				d="M5.67964 9.79403C6.05382 6.49085 8.77095 4 12 4C15.2291 4 17.9462 6.49085 18.3204 9.79403L18.6652 12.8385C18.7509 13.595 19.0575 14.3069 19.5445 14.88C20.5779 16.0964 19.7392 18 18.1699 18H5.83014C4.26081 18 3.42209 16.0964 4.45549 14.88C4.94246 14.3069 5.24906 13.595 5.33476 12.8385L5.67964 9.79403Z"
				fill={fill}
			/>
		</svg>
	);
}
