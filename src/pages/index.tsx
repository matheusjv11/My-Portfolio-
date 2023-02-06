import Head from 'next/head'
import Header from './components/Header/index'
import InitialPage from './components/InitialPage/index'
import About from './components/About/index'
import Projects from './components/Projects/index'

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus Almeida</title>
        <meta name="description" content="This is my personal website. Hope you enjoy it!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <InitialPage />
        <About />
        <Projects />
      </main>
    </>
  )
}
