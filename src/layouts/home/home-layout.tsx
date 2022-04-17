import { useState } from 'react';
import { Footer, Navbar, Sidebar } from 'components';
import { Outlet } from 'react-router-dom';
import './styles.scss';

export function HomeLayout() {
	const [sidebar, setSidebar] = useState<Boolean>(true);
	return (
		<div id="app">
			<Sidebar isShow={sidebar} />
			<div
				id="container"
				className="min-h-full"
				style={{ backgroundColor: '#F0F2FA' }}>
				<Navbar />
				<div id="app-container">
					<Outlet />
					<Footer />
				</div>
			</div>
		</div>
	);
}
