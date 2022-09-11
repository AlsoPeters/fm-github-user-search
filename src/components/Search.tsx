import React, { useState } from 'react';
import SearchIcon from '../assets/icon-search.svg';

export default function Search({ onSearch, error, loading }: SearchProps) {
  const [value, setValue] = useState('');

  function onSubmit() {
    onSearch(value);
  }

  return (
    <>
      <div className='flex items-center justify-around shadow-lg md:justify-between lg:justify-between dark:bg-DM-dark-blue md:px-4 bg-LM-white rounded-xl'>
        <div className='flex lg:flex-grow'>
          <SearchIcon className='' />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Search GitHub username...'
            className='px-2 border-none lg:px-2 dark:text-DM-white md:w-full text-LM-black font-Space caret-DM-blue dark:bg-DM-dark-blue focus:outline-none'
          />
        </div>
        <p className='absolute flex ml-4 text-red-500 sm:mr-4 sm:relative'>
          {error}
        </p>
        <button
          onClick={() => {
            onSubmit();
          }}
          className={
            loading
              ? 'bg-DM-blue opacity-50 cursor-progress disabled border-none py-4 px-6 rounded-xl my-2 text-DM-white font-Space'
              : 'bg-DM-blue border-none py-4 px-6 rounded-xl my-2 text-DM-white font-Space'
          }
        >
          Search
        </button>
      </div>
    </>
  );
}

interface SearchProps {
  onSearch: (user: string) => void;
  loading: boolean;
  error: string;
}
