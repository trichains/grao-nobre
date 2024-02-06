import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contato" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
        Endereço
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ color: '#AAA' }}>
          Rua Café Aromático - 366
        </p>
        <p className="p__opensans" style={{ color: '#AAA' }}>
          Campo Grande MS
        </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>
          Horário de funcionamento
        </p>
        <p className="p__opensans">Seg - Sex: 10:00 - 02:00</p>
        <p className="p__opensans">Sáb - Dom: 10:00 - 03:00</p>
      </div>

      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>
        Fale conosco
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
