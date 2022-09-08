import Avatar from './Avatar';

export default function Info() {
  return (
    <>
      <div className='flex items-center gap-4 mt-4 justify-self-start lg:justify-between md:gap-10'>
        <div className='lg:hidden'>
          <Avatar />
        </div>
        <div className='flex flex-col'>
          <div className='dark:text-DM-white md:text-2xl md:font-bold'>
            The Octocat
          </div>
          <div className='mb-2 text-DM-blue'>@octocat</div>
          <div className='dark:text-DM-white lg:hidden text-LM-grey'>
            Joined 25 Jan 2011
          </div>
        </div>
        <div className='hidden dark:text-DM-white lg:contents text-LM-grey'>
          Joined 25 Jan 2011
        </div>
      </div>

      <p className='dark:text-white text-LM-grey text-[15px] leading-6'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. fdfdfdk
        jklrhelkhfdj.
      </p>
    </>
  );
}
