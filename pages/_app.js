import Header from '../components/Header'
import Footer from '../components/footer'


import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header></Header>
      <Component {...pageProps} />
    <Footer></Footer>
    </>
  )
    
}

export default MyApp
