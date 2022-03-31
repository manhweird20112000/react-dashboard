import { Link, Outlet } from 'react-router-dom';

export function HomeLayout() {
	return (
		<div id="app" className="w-screen h-screen overflow-hidden">
			<div id="sidebar"></div>
			<div id="container">
				<div id="navbar"> </div>
				<div id="app-container">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
