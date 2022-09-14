import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "../context/themeContext";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default MyApp;
