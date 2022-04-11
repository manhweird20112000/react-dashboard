import { Footer, Navbar, Sidebar } from 'components';
import { Outlet } from 'react-router-dom';
import './styles.scss';

export function HomeLayout() {
	return (
		<div id="app">
			<Sidebar />
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
