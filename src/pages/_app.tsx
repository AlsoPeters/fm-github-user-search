import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className='mx-6 font-Space'>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
