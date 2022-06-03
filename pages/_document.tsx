import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap"
            rel="stylesheet"
          />
          {/* <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;500&display=swap" rel="stylesheet"/> */}
        </Head>

        <body className="bg-secondary-600">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
