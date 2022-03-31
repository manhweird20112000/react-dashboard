import { IconHome } from 'assets/icons';

export const menu = [
	{
		id: 0,
		hasChild: 0,
		type: 'LINK',
		to: '/',
		child: [],
		label: 'đây là link nè',
	},
	{
		id: 1,
		label: 'OCEAN',
		type: 'COLLAPSE',
		to: null,
		hasChild: 1,
		child: [
			{
				id: 1,
				label: 'Dashboard',
				icon: <IconHome />,
				iconActive: <IconHome fill="white" />,
				to: '/',
			},
		],
	},
	{
		id: 2,
		label: 'PERMISSION',
		hasChild: 0,
		to: null,
		type: 'COLLAPSE',
		child: [],
	},
];
