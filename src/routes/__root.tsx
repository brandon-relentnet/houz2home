import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";

function NotFound() {
	return (
		<div className="min-h-[80vh] flex items-center justify-center px-6">
			<div className="text-center">
				<span className="block font-display text-[10rem] md:text-[14rem] text-gold/10 leading-none select-none">
					404
				</span>
				<h2 className="-mt-10 md:-mt-14 relative z-10">Page Not Found</h2>
				<p className="max-w-md mx-auto">
					The page you&apos;re looking for doesn&apos;t exist or has been moved.
				</p>
				<Link
					to="/"
					className="inline-block mt-6 px-8 py-3.5 bg-gold text-night text-sm font-semibold tracking-[0.1em] uppercase hover:bg-gold-light transition-colors duration-300"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
}

export const Route = createRootRoute({
	component: RootLayout,
	notFoundComponent: NotFound,
});

function RootLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
}
