import CompanyIcon from '../assets/icon-company.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import WebsiteIcon from '../assets/icon-website.svg';
import Location from '../assets/icon-location.svg';

export default function Social({ info }: SocialProps) {
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:px-6 text-sm'>
      <div className='flex flex-col'>
        <div className='text-LM-slate flex items-center gap-4 '>
          <Location className='dark:fill-DM-white fill-LM-slate' />
          <p className='text-DM-white'>
            {info?.location ? (
              info?.location
            ) : (
              <span className='text-gray-500'>Not Available</span>
            )}
          </p>
        </div>
        <div className='text-LM-slate flex items-center gap-4 '>
          <WebsiteIcon className='dark:fill-DM-white fill-LM-slate' />
          <p className='text-DM-blue'>
            {info?.html_url ? (
              <a href={info.html_url}>{info.html_url}</a>
            ) : (
              <span className='text-gray-500'>Not Available</span>
            )}
          </p>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='text-LM-slate flex items-center gap-4 '>
          <TwitterIcon className='dark:fill-DM-white fill-LM-slate' />
          <p className='text-DM-white'>
            {info?.twitter_username ? (
              info.twitter_username
            ) : (
              <span className='text-gray-500'>Not Available</span>
            )}
          </p>
        </div>

        <div className='text-LM-slate flex items-center gap-4'>
          <CompanyIcon className='dark:fill-DM-white fill-LM-slate' />
          <p>
            {info?.company ? (
              info.company
            ) : (
              <span className='text-gray-500'>Not Available</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

interface SocialProps {
  info: any;
}
