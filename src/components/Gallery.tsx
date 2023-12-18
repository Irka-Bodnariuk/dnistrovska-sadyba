// "use client";
import React from 'react';
import Image from 'next/image';
import bg from '../../public/gallery.jpg';
import { WawesHero } from './Wawes';
import ImageModal from './ImageModal';
// import { useState } from 'react';
import backEnter from '../../public/hero_image.png'
import mainCorpus from '../../public/Main Corpus.png'
import dnister from '../../public/river.png'
import harbor_enter from '../../public/harbor.png'
import harbor from '../../public/harbor-left.jpg'
const Gallery = () => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };




    return (
        <div className='relative'>
            <WawesHero />
            <Image src={bg} alt="Gallery" className=' w-full' />
            <div className="relative bottom-0 transform rotate-180">
                <WawesHero />
            </div>
            {/* <div className=" top-1/2 right-1/4 absolute flex items-center z-20">
                < ImageModal btnTitle={"Берег"} src={backEnter.src} />
            </div> */}

            {/* <div className=" absolute flex items-center z-10" style={{ top: '47%', left: '56%' }}>
                < ImageModal btnTitle={"Вихід до причалу"} src={harbor_enter.src} />
            </div>

            <div className=" absolute flex items-center z-10" style={{ top: '35%', left: '66%' }}>
                < ImageModal btnTitle={"Причал"} src={harbor.src} />
            </div> */}

            <div className="absolute flex flex-col items-center z-10" style={{ top: '35%', left: '35%' }}>
                < ImageModal btnTitle={"Головний корпус"} src={mainCorpus.src}  />
            </div>

            <div className=" absolute flex items-center z-10"style={{ top: '28%', left: '55%' }}>
                < ImageModal btnTitle={"Вихід до річки"} src={mainCorpus.src} />
            </div>

            {/* <div className=" absolute flex items-center z-10"style={{ top: '20%', left: '85%' }}>
                < ImageModal btnTitle={"Дністер"} src={dnister.src} />
            </div> */}
            
        </div>
    );
}

export default Gallery;