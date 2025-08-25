// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        {/* App content */}
        <Main />
        {/* Portal root: must be outside <Main/> and before <NextScript/> */}
        <div id="modal-root" />
        <NextScript />
      </body>
    </Html>
  );
}
