import '@/styles/globals.css'
import Footer from '../../components/footer-section/footer-section';
export default function App({ Component, pageProps }) {
  return(
    <>
        <Component {...pageProps} />
         <Footer />
    </>
 );
}
