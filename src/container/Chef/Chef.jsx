import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef__img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Barista" />
      <h1 className="headtext__cormorant">Nossa Crença</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote__img" />
          <p className="p__opensans-italic">No Grão Nobre, acreditamos no poder unificador do café.</p>
        </div>
        <p className="p__opensans-italic">
          Buscamos a excelência em cada xícara, transformando cada gole em uma celebração única. Junte-se a nós nessa
          jornada de sabores e histórias. ☕✨{' '}
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Barista & Idealizador</p>
        <img src={images.sign} alt="sign__img" />
      </div>
    </div>
  </div>
);

export default Chef;
