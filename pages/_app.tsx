import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { Audiowide } from 'next/font/google'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #__next, main {
    height: 100%;
    width: 100%;
  }
`;

// const audiowide = Audiowide({
//   weight: '400',
//   subsets: ['latin']
// })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <main>
        {/* <main className={audiowide.className}> */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
