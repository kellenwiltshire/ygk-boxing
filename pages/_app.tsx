import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return <AnimatePresence onExitComplete={handleExitComplete}>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Provider>
  </AnimatePresence>;
}

export default MyApp;