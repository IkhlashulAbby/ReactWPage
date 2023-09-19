import CoverFlow from '../utils/CoverFlow';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
const Theme = () => {
  return (
    <>
      <section className='w-screen'>
        <div className='bg-slate-200 p-4'>
          <div className='md:flex flex p-8 flex-col md:flex-row'>
            <div className='p-5 order-2 md:order-1 my-auto'>
              <h2 className='text-slate-900 text-3xl font-bold capitalize py-3'>
                Best Seller theme
              </h2>
              <p className='text-slate-800 opacity-95 font-base font-normal py-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, perspiciatis.
              </p>
              <div className='py-4 my-1'>
                <button className='py-2 px-4 bg-slate-800 text-slate-200 shadow-lg hover:border hover:border-slate-800 hover:bg-opacity-0 hover:text-slate-800'>
                  See More
                </button>
              </div>
            </div>
            <div className='md:w-3/4 mt-5 order-1 md:order-2 w-full'>
              <CoverFlow />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Theme;
