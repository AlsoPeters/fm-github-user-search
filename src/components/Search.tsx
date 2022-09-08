import React, { useState } from 'react';
import SearchIcon from '../assets/icon-search.svg';

export default function Search({ onSearch, error, loading }: SearchProps) {
  const [value, setValue] = useState('');

  function onSubmit() {
    onSearch(value);
  }

  return (
    <>
      <div className='dark:bg-DM-dark-blue md:px-4 bg-LM-white shadow-lg rounded-xl justify-around px-2 flex items-center'>
        <div className='flex md:gap-4 gap-2 flex-grow'>
          <SearchIcon />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Search GitHub username...'
            className='text-DM-white md:w-full font-Space text-sm caret-DM-blue dark:bg-DM-dark-blue border-none focus:outline-none'
          />
        </div>
        <p className='text-red-500 mr-4'>{error}</p>
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
