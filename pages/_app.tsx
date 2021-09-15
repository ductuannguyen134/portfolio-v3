// import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />{" "}
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          color: white;
          font-family: "Helvetica";
        }
      `}</style>
    </>
  );
}
export default MyApp;
