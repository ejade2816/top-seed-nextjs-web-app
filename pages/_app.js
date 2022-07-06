import "../styles/_app.css";
import { UserProvider } from '@auth0/nextjs-auth0';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AppNav from "../semantics/AppNav";
import AppMetaHead from "../semantics/AppMetaHead";
import AppFooter from "../semantics/AppFooter";
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<AppMetaHead/>
			<AppNav/>
			<Component {...pageProps} />
			<AppFooter/>
		</UserProvider>
	);
}

export default MyApp;
