import Car from './Car';
import { collection } from '../data/data';

const carTerm = (car) => {
  return (
    <Car
      key={car.id}
      price={car.price}
      brand={car.brand}
      image={car.image}
      location={car.location}
    />
  );
};

const CarsCollection = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <span className='relative'>Our </span>
          </span>{' '}
          Cars Collection
        </h2>
        <p className='text-base md:text-lg'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className='grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2 text-black'>
        {/* ++++++++++++++++++++++++++++ */}

        {collection.map(carTerm)}
        {/* ++++++++++++++++++++++++++++ */}
      </div>
    </div>
  );
};

export default CarsCollection;
