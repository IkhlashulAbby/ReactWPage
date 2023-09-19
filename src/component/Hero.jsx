import Nav from '../utils/Nav';

const Hero = () => {
  return (
    <>
      <section className='w-screen'>
        <main className=''>
          <Nav />
          <div className='flex bg-gradient-to-t from-cyan-300 from-30% via-sky-400 via-40% to-cyan-600 to-90% md:bg-gradient-to-r md:from-cyan-300 md:from-20% md:via-sky-400 md:via-50% md:to-cyan-600 md:to-9 0% w-full p-6 md:p-8 lg:p-10 gap-2 flex-col md:flex-row'>
            <div className='w-full md:w-1/2 md:p-10 lg:p-12 justify-center p-5 order-2 lg:order-1'>
              <h2 className='text-amber-900 font-bold text-4xl leading-10 capitalize mb-6 md:text-5xl md:mb-8'>
                Undang Tamu Anda dengan Elegansi dan Kemudahan!
              </h2>
              <p className='capitalize text-slate-800 font-normal leading-7 text-lg mb-6 md:text-xl md:mb-8'>
                Kami hadir untuk mengubah cara Anda mengundang tamu Anda dengan
                gaya yang segar dan inovatif.
              </p>
              <div className='mt-6 py-4'>
                <button
                  className='py-3 px-8 uppercase bg-amber-900
                 rounded-lg text-base font-bold leading-8 text-amber-400 shadow-sm lg:shadow-md  lg:shadow-amber-700 hover:bg-amber-600 hover:text-amber-950 hover:opacity-90 hover:shadow-amber-400 hover:shadow-md'>
                  buat sekarang
                </button>
              </div>
            </div>
            <div className='p-5 md:w-1/2 order-1 lg:order-2 mt-5 md:mt-0'>
              <div className='md:py-8 lg:my-10 lg:mx-8'>
                <img
                  src='/img/1.jpg'
                  alt=''
                  className='rounded-md md:rounded-3xl md:w-[480px] md:shadow-lg'
                />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;
