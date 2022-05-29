import { FC, ReactElement, ReactNode } from 'react';
import './Button.scss';

interface Button{
  children?: ReactNode,
  name: string,
  bType?: string,
  disable?: boolean
}

const Button: FC<Button> = ({ children, name, bType, disable }): ReactElement  => {
  let btnClass = 'default';
  if (bType?.length) {
    btnClass = bType;
  }

  btnClass = 'btn-' + btnClass;
  return (<button type='button' className={'btn ' + btnClass} disabled={disable}>
    { children}
    {name}
  </button>)
}

export default Button;