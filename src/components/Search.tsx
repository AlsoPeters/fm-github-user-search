import React from 'react';
import SearchIcon from '../assets/icon-search.svg';

export default function Search() {
  return (
    <div className='bg-DM-dark-blue rounded-xl gap-2 px-2 py-1 my-2 flex items-center'>
      <SearchIcon />
      <p className='text-DM-white truncate'>Search Github username or </p>
      <button className='bg-DM-blue border-none py-4 px-6 rounded-xl text-DM-white font-Space'>
        Search
      </button>
    </div>
  );
}
