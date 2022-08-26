import React from 'react';
import Sun from '../assets/icon-sun.svg';

export default function Nav() {
  return (
    <div className='flex items-center justify-between text-DM-white'>
      <p className='font-Space font-bold text-[26px] leading-[38px]'>
        devfinder
      </p>
      <div>
        <p className='flex items-center gap-4 font-Space text-lg'>
          LIGHT
          <Sun />
        </p>
      </div>
    </div>
  );
}
