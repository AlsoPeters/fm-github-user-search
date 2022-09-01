import React from 'react';
import Stats from './Stats';
import Social from './Social';
import Info from './Info';

export default function Body() {
  return (
    <div className='dark:bg-DM-dark-blue bg-LM-white rounded-xl my-4 px-6 py-4 flex flex-col gap-4 shadow-lg'>
      <Info />
      <Stats />
      <Social />
    </div>
  );
}
