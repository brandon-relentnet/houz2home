import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
