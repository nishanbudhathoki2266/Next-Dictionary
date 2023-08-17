import { DictionaryProvider } from "@/context/DictionaryContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <DictionaryProvider>
      <Head>
        <title>Next Dictionary</title>
        <meta
          name="description"
          content="A dictionary made with Next JS. Here you can search words and get every meanings along with the pronounciations."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />;
    </DictionaryProvider>
  );
}
