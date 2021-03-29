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
                    
                    gtag('config', 'UA-111892799-3');
                    gtag('config', 'G-V96YTLL7K3');`
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '278854370347206');
            fbq('track', 'PageView');`
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=278854370347206&ev=PageView&noscript=1" />
        </noscript>
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
      {
        !home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )
      }
    </div >
  )
}
