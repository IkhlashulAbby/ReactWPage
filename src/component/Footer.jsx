import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

const Footer = () => {
  const iconStyle = {
    color: 'white',
    fontSize: '24px',
    opacity: '0.7',
    cursor: 'pointer',
  };
  return (
    <>
      <footer className='w-screen bg-slate-800 p-4'>
        <div className='mx-auto flex justify-center gap-5 mt-4'>
          <a href=''>
            <AiFillFacebook
              style={iconStyle}
              className='hover:scale-110'
            />
          </a>
          <a href=''>
            <AiFillInstagram
              style={iconStyle}
              className='hover:scale-110'
            />
          </a>
          <a href=''>
            <AiOutlineWhatsApp
              style={iconStyle}
              className='hover:scale-110'
            />
          </a>
        </div>
        <div className='w-full mx-auto py-4'>
          <ul className='flex justify-center gap-10 text-slate-200 opacity-80'>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Theme</a>
            </li>
            <li>
              <a href=''>Feature</a>
            </li>
            <li>
              <a href=''>Product</a>
            </li>
            <li>
              <a href=''>About Us</a>
            </li>
          </ul>
        </div>
        <div className='py-2  text-sm text-center'>
          <h4 className='text-slate-200 opacity-70'>
            By: <span>W.Page</span>
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
