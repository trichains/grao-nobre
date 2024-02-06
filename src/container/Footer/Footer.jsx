import { FooterOverlay, Newsletter } from '../../components';
import { FiInstagram, FiGithub, FiCode } from 'react-icons/fi';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Fale Conosco</h1>
        <p className="p__opensans">Campo Grande - MS</p>
        <p className="p__opensans">+55 99 99999-9999</p>
        <p className="p__opensans">+55 99 99999-9999</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.graonobre_footer} alt="footer_logo" />
        <p className="p__opensans" style={{ fontStyle: 'italic' }}>
          &ldquo;A descoberta pessoal se revela ao se dedicar com paixão aos amantes de café.&rdquo;
        </p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: '15px' }} />
        <div className="app__footer-links_icons">
          <a href="https://www.instagram.com/trichains" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
          <a href="https://trichains.dev" target="_blank" rel="noreferrer">
            <FiCode />
          </a>
          <a href="https://github.com/trichains" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Funcionamento</h1>
        <p className="p__opensans">Segunda-Sexta:</p>
        <p className="p__opensans">10:00 - 02:00</p>
        <p className="p__opensans">Sábado-Domingo:</p>
        <p className="p__opensans">10:00 - 03:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        2024 Grão Nobre.<span> Alguns direitos reservados.</span>
      </p>
    </div>
  </div>
);

export default Footer;
