import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Sinta o aroma especial" />
      <h1 className="app__header-h1">Café fresco pela manhã</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Dos tradicionais ao especiais, cada xícara é uma jornada sensorial. Sinta o equilíbrio de sabores. Uma
        experiência única, desperte seus sentidos ☕✨
      </p>
      <button type="button" className="custom__button">
        Explorar Menu
      </button>
    </div>
  </div>
);

export default Header;
