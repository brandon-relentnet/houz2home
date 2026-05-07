import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "@/context/GlobalContext";
import App from "./App";

import "./styles.css";

const root = document.getElementById("root");

if (!root) {
	throw new Error("Root element not found");
}

createRoot(root).render(
	<StrictMode>
		<GlobalProvider>
			<BrowserRouter>
				<App />
				<Toaster
					gutter={12}
					position="top-right"
					toastOptions={{
						className:
							"rounded-[1.25rem] border border-rule bg-deep px-4 py-3 text-sm text-cream shadow-[0_18px_40px_rgba(17,17,17,0.24)]",
						duration: 4000,
						success: {
							className:
								"rounded-[1.25rem] border border-gold/60 bg-deep px-4 py-3 text-sm text-cream shadow-[0_18px_40px_rgba(17,17,17,0.24)]",
							iconTheme: {
								primary: "#d3ae6a",
								secondary: "#1c1a17",
							},
						},
					}}
				/>
			</BrowserRouter>
		</GlobalProvider>
	</StrictMode>,
);
