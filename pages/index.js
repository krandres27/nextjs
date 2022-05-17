import Head from 'next/head'
import { getFeaturedEvents } from '../helpers/api-util'
import { EventList } from '../components/events'
import styles from '../styles/Home.module.css'

export default function Home({ featuredEvents }) {
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

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents
    },
    revalidate: 1800 // 30 minutes until it revalidates for new data
  }
}