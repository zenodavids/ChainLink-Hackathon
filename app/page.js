import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import HeroBanner2 from './components/HeroBanner2';

const Home = () => {
  return (
    <div>
      <div className='text-center justify-between bg-black text-white capitalize text-sm sm:text-sm px-4 py-5 mx-auto sm:max-w-xl md:px-24 lg:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
        learn about our 2023 products roadmap and what they mean to you.
      </div>
      <Navbar />
      <HeroBanner />
      <HeroBanner2 />
    </div>
  );
};

export default Home;
