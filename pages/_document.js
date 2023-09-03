import React from 'react'
//import Head from 'next/head'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html dir="ltr" lang="en">
        <Head>


          <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
          <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
          <link href="/css/app.css" rel="stylesheet" />

          {/*} <link href="/css/style.css" rel="stylesheet"  defer/>    
            <link href="/css/responsive.css" rel="stylesheet"  />    
    <link href="/css/color.css" rel="stylesheet"   /> */}



        </Head>
        <body>


          <Main />

          <NextScript />

        </body>

      </Html>
    )
  }
}

export default MyDocument
