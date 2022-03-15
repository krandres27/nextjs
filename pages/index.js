import Head from 'next/head'
import { getFeaturedEvents } from '../feed'
import { EventList } from '../components/events'
import styles from '../styles/Home.module.css'

export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Events App</title>
        <meta name="description" content="Next Event App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EventList events={featuredEvents}/>
      </main>
    </div>
  )
}
