import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <a>
          <span className={styles.logo}>
            <Image src="/Shell_Mentor_Logo.png" alt="Shell Mentor Logo" width={50} height={80} />
          </span>
        </a>
        
        <title>Shell Mentor</title>
        <meta name="description" content="Generated by the Shell Mentor team" />
        <link rel="icon" href="/Shell_Mentor_Logo copy.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Shell Mentor!
        </h1>


        <div className={styles.grid}>
          <a
            href="http://shellhacks.us-hpccsystems-dev.azure.lnrsg.io:8002/WsEcl/xslt/query/roxie/mentors_sm?distance=1&firstname=Hiram&lastname=Kelly&zipcode=30002&birthday=10%2F10%2F1992&race_ethnicity=Black%2FAfrican+American&%40traceLevel=&submit_type=run_xslt"
            className={styles.card}
          >
            <h2>Hiram Kelly &rarr;</h2>
            <p>
              Roxie Dashboard
            </p>
          </a>
        </div>


        <div className={styles.grid}>
          <a
            href="http://shellhacks.us-hpccsystems-dev.azure.lnrsg.io:8002/WsEcl/xslt/query/roxie/mentors_sm?distance=10&firstname=Alicia&lastname=Gilfillan&zipcode=30052&birthday=12%2F31%2F1992&race_ethnicity=&%40traceLevel=&submit_type=run_xslt"
            className={styles.card}
          >
            <h2>Alicia Gilfillan &rarr;</h2>
            <p>
              Roxie Dashboard
            </p>
          </a>
        </div>


        <div className={styles.grid}>
          <a
            href="http://shellhacks.us-hpccsystems-dev.azure.lnrsg.io:8002/WsEcl/xslt/query/roxie/mentors_sm?distance=10&firstname=Virginia&lastname=Robinson&zipcode=30218&birthday=8%2F10%2F1993&race_ethnicity=Black%2FAfrican+American&%40traceLevel=&submit_type=run_xslt"
            className={styles.card}
          >
            <h2>Virginia Robinson &rarr;</h2>
            <p>
              Roxie Dashboard
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
