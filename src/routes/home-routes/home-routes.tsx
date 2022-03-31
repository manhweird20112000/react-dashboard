import { Events, News } from 'app/modules';
import { HomeLayout } from 'layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export function HomeRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route path="/news" element={<News />} />
					<Route path="/events" element={<Events />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
