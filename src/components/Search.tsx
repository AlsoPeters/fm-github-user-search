import React from 'react';
import SearchIcon from '../assets/icon-search.svg';

export default function Search() {
  return (
    <>
      <div className='dark:bg-DM-dark-blue md:px-4 bg-LM-white shadow-lg rounded-xl justify-around px-2 flex items-center'>
        <div className='flex md:gap-4 gap-2 flex-grow'>
          <SearchIcon />
          <input
            placeholder='Search GitHub username...'
            className='text-DM-white md:w-full font-Space text-sm caret-DM-blue dark:bg-DM-dark-blue border-none focus:outline-none'
          />
        </div>
        <button className='bg-DM-blue border-none py-4 px-6 rounded-xl my-2 text-DM-white font-Space'>
          Search
        </button>
      </div>
    </>
  );
}
