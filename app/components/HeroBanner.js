import Image from 'next/image';
import HeroBannerCar from '../hero-banner-car.png';

const HeroBanner = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-10 lg:grid-cols-2'>
        <div className='lg:pr-10'>
          <h5 className='mb-4 text-4xl font-extrabold leading-none'>
            Search and find
            <br className='hidden md:block' />
            your best Car{' '}
            <span className='inline-block text-deep-purple-accent-400'>
              and Rent Easily!
            </span>
          </h5>
          <p className='mb-6 text-gray-900'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
          <hr className='mb-5 border-gray-300' />
          <div className='flex items-center space-x-4'>
            <p
              className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none cursor-pointer bg-[#a11315] text-white
                '
            >
              Book a Car
            </p>
            <p className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 focus:outline-none cursor-pointer text-[#a11315] border-b-2 border-[#a11315]'>
              see all cars
            </p>
          </div>
        </div>
        <div>
          <Image
            className='object-cover w-full h-56 sm:h-96'
            src={HeroBannerCar}
            alt=''
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
