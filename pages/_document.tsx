import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>DogeSoundClub</title>
        <meta name="description" content="dogesoundclub" />
        <meta name="keywords" content="dogesoundclub" />
        <meta
          name="naver-site-verification"
          content="9d659a94c3d81b69ed2a0309687da807314f35bd"
        />
        <meta property="og:title" content="dogesoundclub" />
        <meta property="og:description" content="dogesoundclub" />
        <meta property="og:image" content="https://dogesound.club/thumb.jpg" />
        <meta property="og:type" content="website" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Audiowide&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
