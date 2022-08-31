import React from 'react';

export default function Stats() {
  return (
    <div className='flex justify-between px-6 dark:bg-DM-black bg-LM-light-grey rounded-lg dark:text-DM-white pt-4 text-LM-grey'>
      <div className='flex flex-col items-center'>
        <div>Repos</div>
        <p className='font-bold text-LM-black dark:text-DM-white'>8</p>
      </div>

      <div className='flex flex-col items-center'>
        <div>Followers</div>
        <p className='font-bold text-LM-black dark:text-DM-white '>3938</p>
      </div>

      <div className='flex flex-col items-center'>
        <div>Following</div>
        <p className='font-bold text-LM-black dark:text-DM-white'>9</p>
      </div>
    </div>
  );
}
