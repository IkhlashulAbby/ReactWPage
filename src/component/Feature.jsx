import { datas } from '../utils/datas';
const Feature = () => {
  return (
    <>
      <section className='w-screen bg-stone-700 p-4'>
        <div className='w-full p-4'>
          <div className='text-center mt-3 py-3'>
            <h1 className='text-4xl font-bold text-slate-200 mb-4 capitalize'>
              Feature
            </h1>
            <p className='text-base font-normal text-slate-200 opacity-80 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam dolorem officia iure. Harum, eveniet?
            </p>
          </div>
          <div className='w-full mt-2'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 p-2 md:w-full'>
              {datas.map((data, index) => {
                return (
                  <>
                    <div
                      className='py-12 px-8 bg-slate-800  text-center text-slate-200 shadow-xl cursor-pointer hover:opacity-80 hover:bg-slate-900 hover:scale-105 rounded-tl-xl rounded-br-xl '
                      key={index}>
                      <div className='flex flex-col justify-center mb-2 flex-wrap gap-3'>
                        <div className='mx-auto mb-2'>{data.icon}</div>
                        <h3 className='font-semibold text-xl mb-3'>
                          {data.judul}
                        </h3>
                        <p className='font-normal text-base opacity-80'>
                          {data.isi}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
