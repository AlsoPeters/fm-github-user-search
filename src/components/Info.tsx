import Avatar from './Avatar';

export default function Info({ info }: InfoProps) {
  const date = new Date(info.created_at);

  return (
    <>
      <div className='flex items-center gap-4 mt-4 justify-self-start lg:justify-between md:gap-10'>
        <div className='lg:hidden'>
          <Avatar info={info} />
        </div>
        <div className='flex flex-col'>
          <div className='dark:text-DM-white md:text-2xl md:font-bold'>
            {info?.name}
          </div>
          <a
            href={info.html_url}
            target='_blank'
            className='mb-2 no-underline text-DM-blue'
            rel='noreferrer'
          >
            @{info?.login}
          </a>
          <div className='dark:text-DM-white lg:hidden text-LM-grey'>
            Joined {date.toDateString()}
          </div>
        </div>
        <div className='hidden dark:text-DM-white lg:contents text-LM-grey'>
          Joined {date.toDateString().substring(4)}
          {/* 25 Jan 2011 */}
        </div>
      </div>

      <p className='dark:text-white text-LM-grey text-[15px] leading-6'>
        {info?.bio}
      </p>
    </>
  );
}

interface InfoProps {
  info: any;
}
