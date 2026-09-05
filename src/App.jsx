import { IntlProvider } from "react-intl";
import translations, { locale } from "./lib/translations/index.js";
import { mergeTrans, customLangs } from "./lib/translations/custom.js";
import Page from "./page.jsx";
import TopPanel from "./components/tp/tp.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {
	const page = window.location.pathname.split("/p8787gram")[1]
	const trans = mergeTrans()
	return (
		<IntlProvider locale={locale} messages={(customLangs.length === 0) ? translations[locale] : trans}>
			<div class="app-viewport">
				<TopPanel />
				<Page url={page} />
				<Footer />
			</div>
		</IntlProvider>
	)
};

export default App;