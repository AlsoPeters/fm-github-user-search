import React from 'react';
import LightDarkToggle from './LightDarkToggle';

export default function Nav() {
  return (
    <div className='font-bold flex items-center justify-between text-LM-black dark:text-DM-white'>
      <p className='text-[26px] leading-[38px]'>devfinder</p>
      <LightDarkToggle />
    </div>
  );
}
