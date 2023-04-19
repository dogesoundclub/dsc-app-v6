import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta 
          name="naver-site-verification"
          content="9d659a94c3d81b69ed2a0309687da807314f35bd"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Audiowide&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* <Script
          strategy="afterInteractive"
          src="https://www.scmplayer.net/script.js"
          data-config="{'skin':'skins/tunes/skin.css','volume':50,'autoplay':true,'shuffle':false,'repeat':1,'placement':'top','showplaylist':false,'playlist':[{'title':'1','url':'https://www.youtube.com/watch?v=JJ9UGtQwiOk'}]}"
        ></Script> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
