import '../styles/css/bootstrap.min.css';
import '../styles/css/font-awesome.css';
import '../styles/css/slick.css';
import '../styles/css/slick-theme.css';
import '../styles/css/base.css';
import '../styles/css/plugins.css';
import '../styles/css/style.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
