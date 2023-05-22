import { BsTools } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { GiCarKey } from 'react-icons/gi';
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <div className='mb-16'>
      <div className='bg-black text-white'>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400'>
                Our Services
              </p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='red'
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                >
                  <defs>
                    <pattern
                      id='dc223fcc-6d72-4ebc-b4ef-abe121034d6e'
                      x='0'
                      y='0'
                      width='.135'
                      height='.30'
                    >
                      <circle cx='1' cy='1' r='.7' />
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)'
                    width='52'
                    height='24'
                  />
                </svg>
                <span className='relative'>{`We've Got`}</span>
              </span>{' '}
              the Best Services When it comes to renting out Cars
            </h2>
            <p className='text-base md:text-lg'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
        </div>
      </div>
      <div className='relative px-4 sm:px-0'>
        <div className='absolute inset-0 bg-black h-1/2' />
        {/* ++++++++++++++++++++ */}
        <div className='relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md'>
          <ServiceCard title='Car Rental' icon={BsTools} />
          <ServiceCard title='Car Rental' icon={FaCheckCircle} />
          <ServiceCard title='Car Rental' icon={GiCarKey} />
        </div>

        {/* ++++++++++++++++++++ */}
      </div>
    </div>
  );
};

export default Service;
