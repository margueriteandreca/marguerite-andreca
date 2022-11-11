import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Marguerite Andreca
        </h1>
        </main>

        
    </div>
  )
}
