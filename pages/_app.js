import { ContextProvider } from "../context/Context";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
