import './style.css';

import Breadcumb from '../Breadcumb';
import Button from '../Button';

function TopBar({main, sub}) {
  return (
    <div className="line">
        <div className="breadcumb">
            <Breadcumb main={main} sub={sub} />
        </div>
        <Button title="Voltar" border="#143c8d" />
    </div>
  );
}

export default TopBar;
