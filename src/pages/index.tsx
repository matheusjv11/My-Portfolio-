import Head from 'next/head'
import Header from './components/Header'
import InitialPage from './components/InitialPage'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MobileHeader from './components/MobileHeader'

import styles from '@/styles/Home.module.css'
import Footer from './components/Footer'

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
        <Contact />
        <Footer />
        <MobileHeader />
      </main>
    </>
  )
}
