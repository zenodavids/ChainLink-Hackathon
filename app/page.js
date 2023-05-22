import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import HeroBanner2 from './components/HeroBanner2';
import Service from './components/Service';
import CarsCollection from './components/CarsCollection';
import { collection } from './data/data';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <HeroBanner2 />
      <div className='bg-[#ff0000]'>
        <Service />
        <CarsCollection />
      </div>
    </div>
  );
};

export default Home;
