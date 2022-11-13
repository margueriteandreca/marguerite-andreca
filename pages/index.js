import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marguerite Andreca</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <NavBar />

        <Sidebar />
        <Main />

        
    </div>
  )
}
