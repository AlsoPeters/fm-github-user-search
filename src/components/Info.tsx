import Avatar from './Avatar';

export default function Info() {
  return (
    <>
      <div className='flex justify-self-start lg:justify-between items-center gap-4 md:gap-10 mt-4'>
        <div className='lg:hidden'>
          <Avatar />
        </div>
        <div className='flex flex-col'>
          <div className='dark:text-DM-white md:text-2xl md:font-bold'>
            The Octocat
          </div>
          <div className='text-DM-blue mb-2'>@octocat</div>
          <div className='dark:text-DM-white lg:hidden text-LM-grey'>
            Joined 25 Jan 2011
          </div>
        </div>
        <div className='dark:text-DM-white hidden lg:contents  text-LM-grey'>
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
