import './style.css';

function NavBar() {  
  return (
    <div className="navBox">
        <div className="activeLink">
            <p>INÍCIO</p>
        </div>
        <div className="link">
            <p>COMBOS PROMOCIONAIS</p>
        </div>
        <div className="link">
            <p>SERVIÇOS</p>
        </div>
    </div>
  );
}

export default NavBar;
