import GlobalStyle from "@/styles";
import Head from "next/head";
import "../styles/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Old-Capstone Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
