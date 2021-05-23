import './style.css';
import Button from '../Button';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';

function Services() {  
  return (
    <div className="servicesBox">
        <h2>Alguns dos serviços que são realizados no atendimento domiciliar</h2>

        <div className="columns">
          <div className="itemBox">
            <img className="icon" src={img1} alt="Entrega" />
            <p>Consulta Médica</p>
          </div>
          <div className="itemBox">
            <img className="icon" src={img2} alt="Entrega" />
            <p>Consulta Médica</p>
          </div>
          <div className="itemBox">
            <img className="icon" src={img3} alt="Entrega" />
            <p>Consulta Médica</p>
          </div>
        </div>
        <div className="columns">
          <div className="itemBox">
            <img className="icon" src={img4} alt="Entrega" />
            <p>Consulta Médica</p>
          </div>
          <div className="itemBox">
            <img className="icon" src={img5} alt="Entrega" />
            <p>Consulta Médica</p>
          </div>
          <div className="itemBox">
            <img className="icon" src={img6} alt="Entrega" />
            <p>Consulta Médica</p>
          </div>
        </div>

        <div className="my-5">
          <Button title="Ver mais serviços" background="#65a48b" border="#65a48b" color="#ffffff" paddingY="30" />
        </div>
    </div>
  );
}

export default Services;
