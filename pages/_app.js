import '../styles/globals.css'
import { Montserrat } from '@next/font/google'


const montserrat = Montserrat({ subsets: ["latin"]})


function MyApp({ Component, pageProps }) {
  return (

    <main>
    <Component {...pageProps} />
    </main>

  )
}

export default MyApp
