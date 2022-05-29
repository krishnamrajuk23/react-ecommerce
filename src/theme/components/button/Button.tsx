import { FC, ReactElement, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps{
  children?: ReactNode;
  name: string;
  bType?: string;
  disable?: boolean;
  size?: 'sm' | 'md' | 'lg';
  click?: (event: any) => void;
}

const Button = ({ children, name, bType, disable, size = 'sm', click }:ButtonProps): ReactElement  => {
  let btnClass = 'default';
  if (bType?.length) {
    btnClass = bType;
  }

  btnClass = 'btn-' + btnClass + 'btn-' + size;
  return (<button type='button' className={'btn ' + btnClass} disabled={disable} onClick={(event) => click && click(event)}>
    { children}
    {name}
  </button>)
}

export default Button;