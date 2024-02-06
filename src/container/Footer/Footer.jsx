import { FooterOverlay, Newsletter } from '../../components';
import { FiInstagram, FiGithub, FiCode } from 'react-icons/fi';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
