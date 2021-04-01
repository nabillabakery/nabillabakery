import Home from './Home'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Nabilla() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home/>
    
    </div>
  )
}
