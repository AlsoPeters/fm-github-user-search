import type { NextPage } from 'next';
import Head from 'next/head';
import Body from '../components/Body';
import Nav from '../components/Nav';
import Search from '../components/Search';

const Home: NextPage = () => {
  return (
    <div className='md:flex md:flex-col md:justify-center md:h-screen lg:mx-96'>
      <Head>
        <title>Github User Search</title>
        <meta name='description' content='Github User Search' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='mx-6 md:mx-24 lg:mx-auto font-Space'>
        <Nav />
        <Search />
        <Body />
      </div>
    </div>
  );
};

export default Home;
