import React from 'react';
import Sun from '../assets/icon-sun.svg';
import Moon from '../assets/icon-moon.svg';

import useDarkMode from '../useDarkMode';

export default function LightDarkToggle() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div>
      {colorTheme === 'light' ? (
        <div
          className='hover:text-LM-grey hover:fill-LM-grey fill-DM-white cursor-pointer '
          onClick={() => setTheme('light')}
        >
          <p className='flex items-center gap-4 font-Space text-lg'>
            DARK
            <Moon />
          </p>
        </div>
      ) : (
        <div
          className='hover:text-LM-black text-LM-grey hover:fill-DM-black fill-LM-grey cursor-pointer'
          onClick={() => setTheme('dark')}
        >
          <p className='flex items-center gap-4 font-Space text-lg'>
            LIGHT
            <Sun />
          </p>
        </div>
      )}
    </div>
  );
}
