import Head from 'next/head'
import styles from '../styles/Home.module.css'
import firebase from '../firebase/initFirebase'

export default function Home() {
  return (
     
    <div className={styles.container}>
      

      <Head>
        <title>jonasbina.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          jonasbina.com
        </h1>

         
        <div className={styles.grid}>
          <a href="https://github.com/jonasbina">
            My GitHub
        </a> 
        </div>
       <div className={styles.grid}>
        <a href = "/aboutme">
          About me
          </a>
        </div>
      </main>

     
    </div>
  )
}
