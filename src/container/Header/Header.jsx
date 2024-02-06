import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info header__center">
      <SubHeading title="Sinta o aroma especial" />
      <h1 className="app__header-h1">Cafezin☕🤎</h1>
      <p
        className="p__opensans"
        style={{
          color: '#AAA',
          margin: '2rem 0',
          padding: '5px',
          borderRadius: '5px',
          boxShadow: 'rgba(0, 0, 0, 0.4)',
          backgroundColor: 'rgba(0, 0, 0, 1)'
        }}>
        De cafés tradicionais a especiais, cada xícara é uma jornada de sabores equilibrados. Desperte seus sentidos em
        uma experiência única. ✨
      </p>
      <button type="button" className="custom__button">
        Explorar Menu
      </button>
    </div>
  </div>
);

export default Header;
