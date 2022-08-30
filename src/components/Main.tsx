import React from 'react';
import CompanyIcon from '../assets/icon-company.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import WebsiteIcon from '../assets/icon-website.svg';
import Location from '../assets/icon-location.svg';

export default function Main() {
  return (
    <div className='bg-DM-dark-blue rounded-xl my-4 px-4 py-4 flex flex-col gap-4'>
      <div className='flex justify-self-start gap-4 mt-4'>
        <div className='flex justify-center items-center h-[70px] w-[70px] bg-DM-white rounded-full'>
          <p className=''>Avatar</p>
        </div>
        <div className='flex flex-col'>
          <div className='text-DM-white'>The Octocat</div>
          <div className='text-DM-blue mb-2'>@octocat</div>
          <div className='text-DM-white'>Joined 25 Jan 2011</div>
        </div>
      </div>

      <p className='text-white'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. fdfdfdk
        jklrhelkhfdj.
      </p>

      <div className='flex justify-between px-6 py-4 bg-DM-black rounded-lg text-DM-white text-center'>
        <div className='flex flex-col'>
          <div>Repos</div>
          <p className='font-bold'>8</p>
        </div>

        <div className='flex flex-col'>
          <div>Followers</div>
          <p className='font-bold'>3938</p>
        </div>

        <div className='flex flex-col'>
          <div>Following</div>
          <p className='font-bold'>9</p>
        </div>
      </div>

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
