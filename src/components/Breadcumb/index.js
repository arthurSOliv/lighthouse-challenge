import './style.css';

function Breadcumb({main, sub}) {
  return (
    <div className="collumn">
        <h3>{`${main} \\`}</h3>
        <h2>{sub}</h2>
    </div>
  );
}

export default Breadcumb;
