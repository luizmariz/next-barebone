import { AppProps } from 'next/app';
import 'styles/global/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
