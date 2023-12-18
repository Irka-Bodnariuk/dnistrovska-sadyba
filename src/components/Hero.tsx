import Image from 'next/image';
import HeroImage from '../../public/hero_image.png';
import { WawesApartement } from './Wawes';

const Hero = () => {
  return (
    <div> 
      <div className="z-10 relative ">
      <WawesApartement/>
      </div>
        <div className="relative">
        <Image src={HeroImage} alt="HeroImage" className="w-full" height={600} priority={true}  />
      </div>
    </div>
  );
};

export default Hero;