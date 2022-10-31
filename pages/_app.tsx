import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { AppProps } from "next/app";
import "../styles/globals.css";
import awsconfig from "../src/aws-exports";

Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
