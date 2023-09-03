//import { render } from 'react-dom';
//import '../styles/globals.css'
//import Home1 from './Home1'; 
import Script from 'next/script'
import Head from "next/head";
function MyApp({ Component, pageProps }) {

  return (

    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="dHQiJc4A21xoI78RdLo2zkXowPbpqVDJ2cdPhx8eBYk" />
        <meta name="robots" content="all" />
      </Head>
      <Component {...pageProps} />
    </div>
  );


}

export default MyApp
