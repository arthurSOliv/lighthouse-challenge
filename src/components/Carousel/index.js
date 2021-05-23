import './style.css';
import logo from '../../assets/logo.png';

function Carousel() {  
  return (
    <div className="divFlex">
      <div className="divLeft">
        <img src={logo} alt="Lorem Meds" />
        <p>Tudo para cuidar da sua saúde.</p>
        <div className="titleBack">
            <h1>Atendimento Domiciliar</h1>
        </div>
        <div className="points">
            <div className="active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
      </div>
      <div className="divRight">

      </div>
    </div>
  );
}

export default Carousel;
