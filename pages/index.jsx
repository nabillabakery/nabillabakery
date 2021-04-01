import Head from 'next/head'
import {Header, HomePage, Footer} from '../components'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <HomePage/>
      </main>

      <Footer />
    </div>
  )
}
