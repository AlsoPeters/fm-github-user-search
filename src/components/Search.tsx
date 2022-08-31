import React from 'react';
import SearchIcon from '../assets/icon-search.svg';

export default function Search() {
  return (
    <div className='dark:bg-DM-dark-blue bg-LM-white drop-shadow-2xl rounded-xl justify-around pl-4 flex items-center pr-1'>
      <SearchIcon />
      <input
        placeholder='Search GitHub username'
        className='text-DM-white font-Space text-sm caret-DM-blue dark:bg-DM-dark-blue border-none focus:outline-none'
      />
      <button className='bg-DM-blue border-none py-4 px-6 rounded-xl my-2 text-DM-white font-Space'>
        Search
      </button>
    </div>
  );
}
