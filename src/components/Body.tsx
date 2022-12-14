import React from 'react';
import Stats from './Stats';
import Social from './Social';
import Info from './Info';
import Avatar from './Avatar';

export default function Body({ userInfo }: BodyProps) {
  return (
    <div className='dark:bg-DM-dark-blue lg:flex-row bg-LM-white rounded-xl my-4 px-6 py-4 flex flex-col justify-between  lg:px-10 shadow-lg lg:h-[419px]'>
      <div className='hidden lg:contents '>
        <Avatar info={userInfo} />
      </div>
      <div className='flex flex-col justify-around'>
        <Info info={userInfo} />
        <Stats info={userInfo} />
        <Social info={userInfo} />
      </div>
    </div>
  );
}

interface BodyProps {
  userInfo: string;
}
