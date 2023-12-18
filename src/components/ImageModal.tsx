"use client";
import { useState } from 'react';
import Marker from '../../public/pin.svg'; // Import the SVG file as a React component

type ImageProps = {
    src: string;
    btnTitle: string;
};

const ImageModal = ({ src, btnTitle } : ImageProps) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
console.log(Marker);

    return (
        <>
        <button
          
        onClick={openModal}
        className="relative"
        >
          <div className="flex flex-col items-center">
        <p className='font-bold text-overlay'>{btnTitle}</p>
          <img src={Marker.src} alt='маркер' height={"40px"} width={"40px"} />
          </div>
        </button>

            {showModal &&
                <>
                    <div className=" fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
                        <div className="modal-container px-3">
                            <button className="modal-close ml-auto flex " onClick={closeModal}>
                                <span className='text-orange-600'>X</span>
                            </button>
                            <img className="max-w-full z-20" src={src} alt="Зображення" />
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default ImageModal;
