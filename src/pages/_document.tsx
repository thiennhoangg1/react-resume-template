import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
      </Head>
      <body className="bg-white text-textDark dark:bg-darkBlue dark:text-textLight transition-colors duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
