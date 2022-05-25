import type { NextPage } from 'next'
import Head from 'next/head'
import { Background } from '../components/background'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MYoung.io</title>
        <meta name="description" content="Michael Young's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Background />

      <main className={styles.main}>
        Main content
      </main>
    </div>
  )
}

export default Home
