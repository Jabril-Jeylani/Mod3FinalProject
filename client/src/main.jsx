import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "./Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<StoreProvider>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</StoreProvider>
	</Router>
);
