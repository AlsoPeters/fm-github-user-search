import React from 'react';

export default function Stats() {
  return (
    <div className='flex justify-between px-6 bg-DM-black rounded-lg text-DM-white pt-4'>
      <div className='flex flex-col items-center '>
        <div>Repos</div>
        <p className='font-bold'>8</p>
      </div>

      <div className='flex flex-col items-center'>
        <div>Followers</div>
        <p className='font-bold'>3938</p>
      </div>

      <div className='flex flex-col items-center'>
        <div>Following</div>
        <p className='font-bold'>9</p>
      </div>
    </div>
  );
}
