import { Component } from "react";
import BrandButton from "@/components/BrandButton";

/**
 * @typedef RouteErrorBoundaryProps
 * @property {import("react").ReactNode} children
 * @property {string} resetKey
 */

/**
 * @typedef RouteErrorBoundaryState
 * @property {boolean} hasError
 */

export default class RouteErrorBoundary extends Component {
	/** @param {RouteErrorBoundaryProps} props */
	constructor(props) {
		super(props);
		/** @type {RouteErrorBoundaryState} */
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	/** @param {RouteErrorBoundaryProps} prevProps */
	componentDidUpdate(prevProps) {
		if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
			this.setState({ hasError: false });
		}
	}

	/** @param {unknown} error */
	componentDidCatch(error) {
		console.error("Route render failed:", error);
	}

	handleRetry = () => {
		this.setState({ hasError: false });
	};

	render() {
		if (this.state.hasError) {
			return (
				<section className="flex min-h-[60vh] items-center justify-center px-6 py-20">
					<div className="max-w-xl space-y-5 rounded-[2rem] border border-rule-light bg-white/85 p-8 text-center shadow-[0_20px_60px_rgba(28,26,23,0.08)]">
						<p className="label-text">Houz2Home</p>
						<h1 className="text-4xl md:text-5xl">
							This route needs a fresh reload.
						</h1>
						<p className="text-base text-dim md:text-lg">
							The page hit a recoverable loading or rendering problem. You can
							try again now, or head back to the estimator and continue from a
							stable route.
						</p>
						<div className="flex flex-col justify-center gap-3 sm:flex-row">
							<BrandButton onClick={this.handleRetry} type="button">
								Try Again
							</BrandButton>
							<BrandButton to="/estimator" variant="secondary">
								Go To Estimator
							</BrandButton>
						</div>
					</div>
				</section>
			);
		}

		return this.props.children;
	}
}
