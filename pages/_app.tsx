import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #__next, main {
    height: 100%;
    width: 100%;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle/>
    <main>
      <Component {...pageProps} />
    </main>
    </>
  )
}