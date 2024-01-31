import './AboutUs.css';

import { images } from '../../constants';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nós</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Os tradicionais ao especiais, cada xícara é uma jornada sensorial. Sinta o equilíbrio de sabores. Uma
          experiência única, desperte seus sentidos ☕✨
        </p>
        <button type="button" className="custom__button">
          Saiba mais
        </button>
      </div>

      <div className="app__aboutus-content_grao flex__center">
        <img src={images.grao} alt="about_grao" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nossa História</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Nascemos com a visão de redefinir a experiência do café online, buscando constantemente a excelência e
          proporcionando momentos memoráveis em cada xícara. ☕
        </p>
        <button type="button" className="custom__button">
          Saiba mais
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
