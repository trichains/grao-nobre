import { SubHeading, MenuItem } from '../../components';

import { images, data } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="o café que combina com seu aroma" />
      <h1 className="headtext__cormorant-special">Especial de hoje</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_trad flex__center">
        <p className="app__specialMenu-menu_heading">Tradicional</p>
        <div className="app__specialMenu_menu_items">
          {data.traditional.map((trad, index) => (
            <MenuItem key={trad.title + index} title={trad.title} price={trad.price} tags={trad.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_especial flex__center">
        <p className="app__specialMenu-menu_heading">Especial</p>
        <div className="app__specialMenu_menu_items">
          {data.especial.map((esp, index) => (
            <MenuItem key={esp.title + index} title={esp.title} price={esp.price} tags={esp.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        Ver Mais
      </button>
    </div>
  </div>
);

export default SpecialMenu;
