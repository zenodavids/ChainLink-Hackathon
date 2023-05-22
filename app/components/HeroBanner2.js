import Image from 'next/image';
import HeroBannerCar from '../images/hero-banner-car-2.png';

const Header = () => {
  return (
    <div className='relative flex flex-col-reverse px-4 py-6 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full bg-[#ff0000] text-white'>
      <div className='z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center'>
        <Image
          src={HeroBannerCar}
          height={500}
          width={500}
          priority
          className='object-cover object-right w-full h-auto lg:w-auto'
          alt=''
        />
      </div>
      <div className='relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl'>
        <div className='mb-16 lg:pr-5 lg:max-w-lg lg:mb-0'>
          <div className='max-w-xl mb-6'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400'>
                About Us
              </p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none'>
              More than 150+
              <br className='hidden md:block' />
              Special Collection <span className='inline-block '>Of Cars!</span>
            </h2>
            <p className='text-base  md:text-lg'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
