import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document(): React.ReactElement {
  return (
    <Html lang="fr">
      <Head />
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}