import Image from 'next/image';
import HeroImage from '../../public/hero_image.png';
import Wawes from './Wawes';

const Hero = () => {
  return (
    <div className="relative"> {/* Додаємо relative для батьківського контейнера */}
      <div className="relative">
      <Wawes/> {/* Нормальний Wawes */}
      </div>
        <div className="relative">
        <Image src={HeroImage} alt="HeroImage" layout="responsive" width={1200} height={800} />
      </div>
      <div className="relative bottom-20 left-0 transform rotate-180"> {/* Абсолютно позиціонуємо обернений Wawes */}
        <Wawes />
      </div>
    </div>
  );
};

export default Hero;