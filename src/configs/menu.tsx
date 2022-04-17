import { IconAdmins, IconHome, IconSetting } from 'assets/icons';
import { theme } from './theme';

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
		icon: <IconHome fill={theme.whiteColor} />,
	},
	{
		id: 3,
		hasChild: 1,
		type: 'COLLAPSE',
		to: '',
		child: [
			{
				id: 1,
				label: 'Administrators',
				type: 'LINK',
				to: '/administrators',
				child: [],
				hasChild: 0,
				icon: <IconAdmins fill={theme.whiteColor} />,
			},
			{
				id: 2,
				label: 'Group Permission',
				type: 'LINK',
				to: '/group-permission',
				child: [],
				hasChild: 0,
				icon: <IconAdmins fill={theme.whiteColor} />,
			},
			{
				id: 3,
				label: 'Permissions',
				type: 'LINK',
				to: '/permissions',
				child: [],
				hasChild: 0,
				icon: <IconAdmins fill={theme.whiteColor} />,
			},
		],
		label: 'Setting',
		icon: <IconSetting fill={theme.whiteColor} />,
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
