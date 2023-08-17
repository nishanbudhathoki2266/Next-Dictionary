import { DictionaryProvider } from "@/context/DictionaryContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DictionaryProvider>
      <Component {...pageProps} />;
    </DictionaryProvider>
  );
}
