import {Button} from './style.js';

function TopBar({title, border, background, color}) {
  return (
    <Button border={border} background={background} color={color}>
        {title}
    </Button>
  );
}

export default TopBar;
