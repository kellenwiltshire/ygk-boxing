/* eslint-disable @typescript-eslint/unbound-method */
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import nProgress from "nprogress";
import { Router } from "next/router";
import "nprogress/nprogress.css";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);


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