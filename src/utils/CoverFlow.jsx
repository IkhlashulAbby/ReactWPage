import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { photos } from './datas';

export default function CoverFlow() {
  return (
    <>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect={'coverflow'}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        className='coverflow md:w-[600px] w-[380px] h-full flex justify-center md:justify-normal overflow-hidden '>
        {photos.map((p, index) => {
          return (
            <SwiperSlide
              key={index}
              className=' '>
              <div className='p-1 bg-slate-800 rounded-sm '>
                <div className=''>
                  <img
                    src={p}
                    alt=''
                    className='w-[180px]'
                  />
                </div>
                <div className='mt-3 py-2 mx-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='81'
                    height='12'
                    viewBox='0 0 81 12'
                    fill='none'>
                    <path
                      d='M6.5 0L8.5085 3.94953L13 4.58675L9.75 7.65931L10.517 12L6.5 9.94953L2.483 12L3.25 7.65931L0 4.58675L4.4915 3.94953L6.5 0Z'
                      fill='#FFB168'
                    />
                    <path
                      d='M23.5 0L25.5085 3.94953L30 4.58675L26.75 7.65931L27.517 12L23.5 9.94953L19.483 12L20.25 7.65931L17 4.58675L21.4915 3.94953L23.5 0Z'
                      fill='#FFB168'
                    />
                    <path
                      d='M40.5 0L42.5085 3.94953L47 4.58675L43.75 7.65931L44.517 12L40.5 9.94953L36.483 12L37.25 7.65931L34 4.58675L38.4915 3.94953L40.5 0Z'
                      fill='#FFB168'
                    />
                    <path
                      d='M57.5 0L59.5085 3.94953L64 4.58675L60.75 7.65931L61.517 12L57.5 9.94953L53.483 12L54.25 7.65931L51 4.58675L55.4915 3.94953L57.5 0Z'
                      fill='#FFB168'
                    />
                    <path
                      d='M74.5 0L76.5085 3.94953L81 4.58675L77.75 7.65931L78.517 12L74.5 9.94953L70.483 12L71.25 7.65931L68 4.58675L72.4915 3.94953L74.5 0Z'
                      fill='#FFB168'
                    />
                  </svg>
                  <h3 className='py-2 text-sm text-slate-300'>Lorem, ipsum.</h3>
                  <p className='text-sm text-slate-200'>
                    <span className='line-through me-2 opacity-50'>
                      IDR 50.000
                    </span>
                    IDR 40.000
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
