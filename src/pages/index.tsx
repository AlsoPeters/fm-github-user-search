import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Body from '../components/Body';
import Nav from '../components/Nav';
import Search from '../components/Search';

const Home: NextPage = () => {
  const [githubUser, setGithubUser] = useState(null);
  const [searchError, setSearchError] = useState('');
  const [loading, setLoading] = useState(false);

  const getUser = async (user: string) => {
    setSearchError('');
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      if (data.message) {
        setSearchError(data.message);
        return;
      }
      console.log('data', data);

      setGithubUser(data);
    } catch (error: any) {
      console.log('error', error);
      if (error && error.message) {
        setSearchError(error?.message);
      } else {
        setSearchError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='md:flex md:flex-col md:justify-center md:h-screen'>
      <Head>
        <title>Github User Search</title>
        <meta name='description' content='Github User Search' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='mx-6 md:mx-24 lg:w-[730px] lg:h-[611px] lg:mx-auto font-Space'>
        <Nav />
        <Search error={searchError} loading={loading} onSearch={getUser} />
        {githubUser && <Body userInfo={githubUser} />}
      </div>
    </div>
  );
};

export default Home;
