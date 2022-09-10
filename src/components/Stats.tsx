import React from 'react';

export default function Stats({ info }: StatsProps) {
  return (
    <div className='flex justify-around lg:w-[480px] items-center dark:bg-DM-black bg-LM-light-grey rounded-lg dark:text-DM-white h-[85px] text-LM-grey'>
      <div className='flex flex-col items-center'>
        <div>Repos</div>
        <div className='font-bold text-LM-black dark:text-DM-white'>
          {info?.public_repos}
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <div>Followers</div>
        <div className='font-bold text-LM-black dark:text-DM-white '>
          {info?.followers}
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <div>Following</div>
        <div className='font-bold text-LM-black dark:text-DM-white'>
          {info?.following}
        </div>
      </div>
    </div>
  );
}

interface StatsProps {
  info: any;
}
