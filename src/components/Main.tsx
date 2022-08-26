import React from 'react';
import CompanyIcon from '../assets/icon-company.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import WebsiteIcon from '../assets/icon-website.svg';
import Location from '../assets/icon-location.svg';

export default function Main() {
  return (
    <div className='bg-DM-dark-blue rounded-xl my-4 px-4'>
      <section className='flex flex-col text-sm'>
        <div className='text-DM-white flex items-center gap-4 '>
          <Location />
          <p>San Francisco</p>
        </div>
        <div className='text-DM-white flex items-center gap-4 '>
          <WebsiteIcon />
          <p>https://github.blog</p>
        </div>

        <div className='text-DM-white flex items-center gap-4 '>
          <TwitterIcon />
          <p>Not Available</p>
        </div>

        <div className='text-DM-white flex items-center gap-4'>
          <CompanyIcon />
          <p>@github</p>
        </div>
      </section>
    </div>
  );
}
