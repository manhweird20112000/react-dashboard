import { AdminPage, CreateAdminPage, DashboardPage } from 'app/pages';
import { HomeLayout } from 'layouts';
import { NotFoundPage } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export function HomeRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route path="/" element={<DashboardPage />} />
					<Route path="administrators" element={<AdminPage />}>
						<Route path="create" element={<CreateAdminPage />} />
						<Route path=":id" element={<CreateAdminPage />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}
