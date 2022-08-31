import React from 'react';
import Sun from '../assets/icon-sun.svg';
import Moon from '../assets/icon-moon.svg';

import useDarkMode from '../useDarkMode';

export default function LightDarkToggle() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div>
      {colorTheme === 'light' ? (
        <div onClick={() => setTheme('light')}>
          <p className='flex items-center gap-4 font-Space text-lg'>
            LIGHT
            <Sun />
          </p>
        </div>
      ) : (
        <div onClick={() => setTheme('dark')}>
          <p className='flex items-center gap-4 font-Space text-lg'>
            DARK
            <Moon />
          </p>
        </div>
      )}
    </div>
  );
}
