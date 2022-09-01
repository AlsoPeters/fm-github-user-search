import CompanyIcon from '../assets/icon-company.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import WebsiteIcon from '../assets/icon-website.svg';
import Location from '../assets/icon-location.svg';

export default function Social() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:px-6 text-sm'>
      <div className='flex flex-col'>
        <div className='text-LM-slate flex items-center gap-4 '>
          <Location className='dark:fill-DM-white fill-LM-slate' />
          <p>San Francisco</p>
        </div>
        <div className='text-LM-slate flex items-center gap-4 '>
          <WebsiteIcon className='dark:fill-DM-white fill-LM-slate' />
          <p>https://github.blog</p>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='text-LM-slate flex items-center gap-4 '>
          <TwitterIcon className='dark:fill-DM-white fill-LM-slate' />
          <p>Not Available</p>
        </div>

        <div className='text-LM-slate flex items-center gap-4'>
          <CompanyIcon className='dark:fill-DM-white fill-LM-slate' />
          <p>@github</p>
        </div>
      </div>
    </div>
  );
}
