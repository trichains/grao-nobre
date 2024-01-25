import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiCoffeeBeans } from 'react-icons/gi';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.graonobre} alt="grão nobre logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Inicio</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Sobre</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Preços</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Entrar / Cadastrar
        </a>
        <div />
        <a href="/" className="p__opensans">
          Reservar ☕
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GiCoffeeBeans fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Inicio</a>
              </li>
              <li className="p__opensans">
                <a href="#about">Sobre</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Preços</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
