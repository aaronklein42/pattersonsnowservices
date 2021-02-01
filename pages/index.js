import Head from 'next/head'
import styles from '../styles/page.module.css'
import Page from '../components/page/page'
import Header from '../components/header/header'
import HomeContent from '../components/homeContent/homeContent'
import Footer from '../components/footer/footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Patterson Snow Services</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <Page>
        <Header/>
        <HomeContent/>
        <Footer/>
      </Page>
    </div>
  )
}
