import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = 'リチャード 伊真岡 blog'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111892799-2"></script>
        <script 
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'UA-111892799-3');`
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
            <div className={utilStyles.bio}>
              <img
                src="/images/profile.jpg"
                alt={`Richard Imaoka`}
                className={utilStyles.biopic}
              />
              <p className={utilStyles.biodesc}>
                リチャード 伊真岡です。<a href="https://twitter.com/richardimaokaJP">twitter</a>,
                と <a href="https://github.com/richardimaoka">github</a> に生息しています.
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{siteTitle}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
