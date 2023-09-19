import { useState, useEffect } from 'react';

const Nav = () => {
  const [isNav, setIsNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      setScrollNav(window.scrollY <= 20);
    };
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  const listStyle =
    'text-[#34251F] text-base font-bold uppercase md:hover:text-amber-900 hover:text-slate-200';
  return (
    <>
      <div className='md:hidden flex bg-slate-500 justify-between shadow-sm shadow-slate-200 fixed w-full z-50'>
        <h1 className='my-auto mx-8 text-lg font-semibold uppercase '>
          W.page
        </h1>
        <div className='md:hidden mx-10 mt-1'>
          <button onClick={() => setIsNav(!isNav)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-10 h-10 cursor-pointer'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`w-full fixed top-0 z-10 ${
          !scrollNav &&
          'bg-white dark:bg-slate-400 bg-opacity-40 dark:bg-opacity-40 backdrop-blur dark:backdrop-blur'
        }`}>
        <div
          className={
            isNav
              ? 'md:hidden bg-slate-500 opacity-90 mt-10 absolute w-full justify-center flex'
              : 'hidden md:flex justify-evenly'
          }>
          <div className='px-6 order-2'>
            <ul className='flex gap-12 my-4 mx-2 md:flex-row flex-col'>
              <li className={listStyle}>
                <a href='#home'>Home</a>
              </li>
              <li className={listStyle}>
                <a href='#home'>Theme</a>
              </li>
              <li className={listStyle}>
                <a href='#home'>Feature</a>
              </li>
              <li className={listStyle}>
                <a href='#home'>Price</a>
              </li>
              <li className={listStyle}>
                <a href='#home'>About Us</a>
              </li>
            </ul>
          </div>
          <div className='hidden md:block order-1'>
            <div className='py-4 me-8'>
              <h1 className='text-slate-900 font-bold uppercase tracking-wide text-xl '>
                W.Page
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
