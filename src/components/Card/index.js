import './style.css';
import medicine from '../../assets/medicine.png';
import truck from '../../assets/truck.png';

function Card() {  
  return (
    <div className="card">
        <img src={medicine} alt="Remédio" />
        <h3>Amoxil 500mg 150ml</h3>
        <p>CÓDIGO: 155505</p>

        <img className="icon" src={truck} alt="Entrega" />

        <span>Aplicação Domiciliar <b>Gratuíta</b></span>

        <div className="oldPrice">
            <p>R$</p>
            <h4>895</h4>
            <span>,09</span>
            <hr />
        </div>

        <div className="newPrice">
            <p>R$</p>
            <h4>775</h4>
            <span>,09</span>
        </div>
        <p className="parcel">10x de R$ 58,25 sem juros</p>
    </div>
  );
}

export default Card;
