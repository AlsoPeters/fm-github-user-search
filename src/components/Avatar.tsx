import React from 'react';

export default function Avatar({ info }: AvatarProps) {
  return (
    <div className=''>
      <img
        className='rounded-full h-[70px] w-[70px] md:h-[117px] md:w-[117px]'
        src={info?.avatar_url}
        alt='avatar'
      />
    </div>
  );
}

interface AvatarProps {
  info: any;
}
