import React from 'react';
import Stats from './Stats';
import Social from './Social';
import Info from './Info';

export default function Main() {
  return (
    <div className='bg-DM-dark-blue rounded-xl my-4 px-4 py-4 flex flex-col gap-4'>
      <Info />

      <Stats />
      <Social />
    </div>
  );
}
