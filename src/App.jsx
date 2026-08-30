import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import translations, { locale } from "./lib/translations/index.js";
import Page from "./page.jsx";
import TopPanel from "./components/tp/tp.js";
import Footer from "./components/footer/footer.js";

const App = () => {
	const page = window.location.pathname.split("/p8787gram")[1]
	return (
		<IntlProvider locale={locale} messages={translations[locale]}>
			<TopPanel />
			<Page url={page} />
			<Footer />
		</IntlProvider>
	)
};

export default App;