import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import RouteErrorBoundary from "@/components/RouteErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const HomePage = lazy(() => import("@/pages/HomePage"));
const EstimatorPage = lazy(() => import("@/pages/EstimatorPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const PitchPage = lazy(() => import("@/pages/PitchPage"));

function RoutedContent() {
	const location = useLocation();
	const resetKey = `${location.pathname}${location.search}${location.hash}`;

	return (
		<RouteErrorBoundary resetKey={resetKey}>
			<Suspense fallback={<PageLoader />}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/estimator" element={<EstimatorPage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/pitch" element={<PitchPage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Suspense>
		</RouteErrorBoundary>
	);
}

export default function App() {
	return (
		<div className="min-h-screen bg-soft text-deep">
			<SiteHeader />
			<main>
				<ScrollToTop />
				<RoutedContent />
			</main>
			<SiteFooter />
		</div>
	);
}
