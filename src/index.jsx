import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

if (!localStorage.getItem('p8787gram-language')) {
	localStorage.setItem('p8787gram-language', 'ru')
}
if (!localStorage.getItem('p8787gram-theme')) {
	localStorage.setItem('p8787gram-theme', 'light')
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);