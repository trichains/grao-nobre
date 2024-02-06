import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Galeria de Fotos</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
          Explore momentos cativantes capturados em cada xícara e no ambiente acolhedor do Grão Nobre. De latte art
          inspiradora a encontros animados, nossa galeria é uma viagem visual pela paixão pelo café. ☕📸
        </p>
        <button type="button" className="custom__button">
          Ver mais
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => (scrollRef.current.scrollLeft -= 300)} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => (scrollRef.current.scrollLeft += 300)} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
