import { Footer, Navbar, Sidebar } from 'components';
import { Outlet } from 'react-router-dom';
import './styles.scss';

export function HomeLayout() {
	return (
		<div id="app" className="w-screen h-screen overflow-hidden flex">
			<Sidebar />
			<div id="container">
				<Navbar />
				<div id="app-container">
					<Outlet />
					<Footer />
				</div>
			</div>
		</div>
	);
}
