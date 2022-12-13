import '../styles/css/bootstrap.min.css';
import '../styles/css/font-awesome.css';
import '../styles/css/slick.css';
import '../styles/css/slick-theme.css';
import '../styles/css/base.css';
import '../styles/css/plugins.css';
import '../styles/css/style.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

// const env = process.env.NODE_ENV || 'test';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* {env === 'production' ?? (
        <> */}
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TNLY5QDP8G"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TNLY5QDP8G');
        `}
          </Script>
        {/* </>
      )} */}
      <Component {...pageProps} />
    </>
  );
}
