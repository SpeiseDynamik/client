import { Html, Head, Main, NextScript } from 'next/document';
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <DocumentHeadTags />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = documentGetInitialProps;
