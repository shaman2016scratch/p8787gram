import { useEffect, useState } from "react";
import Page from "./page.jsx";
import TopPanel from "./components/tp/tp.js";
import Footer from "./components/footer/footer.js";

const App = () => {
	const page = window.location.pathname.split("/p8787gram")[1]
	return (
		<>
			<TopPanel />
			<Page url={page} />
			<Footer />
		</>
	)
};

export default App;