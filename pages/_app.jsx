import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css';
import 'boxicons/css/boxicons.css'
import "../css/style.css";
import "../css/components.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CV</title>
        <link rel="shortcut icon" href="logo_kh.png" />
        <meta name="description" content="Kevin Hernández CV website" />
        <Component {...pageProps} />
      </Head>
    </>
  );
}

export default MyApp;
