import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import '../Components/Header';
import Header from 'Components/Header';
import Footer from 'Components/Footer.js'
import 'styles/layout_header.css';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
  return(
     <>
     <Head>
        <title>About Codevolution</title>
        <meta name='description'  content='Free tutorials on web development' />
     </Head>
     <Header/>
     <Component {...pageProps} />
     <Footer/> 
     </>
  ) 
}
