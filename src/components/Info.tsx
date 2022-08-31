export default function Info() {
  return (
    <>
      <div className='flex justify-self-start gap-4 mt-4'>
        <div className='flex justify-center items-center h-[70px] w-[70px] bg-LM-light-grey dark:bg-DM-white rounded-full'>
          <p className=''>Avatar</p>
        </div>
        <div className='flex flex-col'>
          <div className='dark:text-DM-white'>The Octocat</div>
          <div className='text-DM-blue mb-2'>@octocat</div>
          <div className='dark:text-DM-white text-LM-grey'>
            Joined 25 Jan 2011
          </div>
        </div>
      </div>

      <p className='dark:text-white text-LM-grey text-[15px] leading-6'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. fdfdfdk
        jklrhelkhfdj.
      </p>
    </>
  );
}
