import { IconHome } from 'assets/icons';

interface MenuType {
	id: number;
	hasChild: number;
	type: 'LINK' | 'COLLAPSE';
	child: MenuType[];
	label: string;
	icon: React.ReactNode;
	to: string;
}

export const menu: MenuType[] = [
	{
		id: 1,
		hasChild: 0,
		type: 'LINK',
		to: '/',
		child: [],
		label: 'Home',
		icon: <IconHome fill="white" />,
	},
	{
		id: 2,
		hasChild: 0,
		type: 'LINK',
		to: '/post',
		child: [],
		label: 'Posts',
		icon: <IconHome fill="white" />,
	},
	// {
	// 	id: 0,
	// 	hasChild: 0,
	// 	type: 'LINK',
	// 	to: '/',
	// 	child: [],
	// 	label: 'đây là link nè',
	// },
	// {
	// 	id: 1,
	// 	label: 'OCEAN',
	// 	type: 'COLLAPSE',
	// 	to: null,
	// 	hasChild: 1,
	// 	child: [
	// 		{
	// 			id: 1,
	// 			label: 'Dashboard',
	// 			icon: <IconHome />,
	// 			iconActive: <IconHome fill="white" />,
	// 			to: '/',
	// 		},
	// 	],
	// },
	// {
	// 	id: 2,
	// 	label: 'PERMISSION',
	// 	hasChild: 0,
	// 	to: null,
	// 	type: 'COLLAPSE',
	// 	child: [],
	// },
];
