import {AnimatePresence} from 'framer-motion'
import {AppProps} from 'next/app'
import {useRouter} from 'next/router'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'

function handleExitComplete() {
	if (typeof window !== 'undefined') {
		window.scrollTo({top: 0})
	}
}

function MyApp({Component, pageProps}: AppProps) {
	const router = useRouter()
	return <AnimatePresence onExitComplete={handleExitComplete}>
		<Layout>
			<Component {...pageProps} key={router.route} />
		</Layout>
	</AnimatePresence>
}

export default MyApp