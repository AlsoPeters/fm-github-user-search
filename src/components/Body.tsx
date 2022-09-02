import React from 'react';
import Stats from './Stats';
import Social from './Social';
import Info from './Info';
import Avatar from './Avatar';

export default function Body() {
  return (
    <div className='dark:bg-DM-dark-blue lg:flex-row bg-LM-white rounded-xl my-4 px-6 py-4 flex flex-col gap-4 lg:px-10 shadow-lg'>
      <div className='hidden lg:contents '>
        <Avatar />
      </div>
      <div className='lg:px-6'>
        <Info />
        <Stats />
        <Social />
      </div>
    </div>
  );
}
