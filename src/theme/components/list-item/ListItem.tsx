import { ReactNode } from "react";

interface ListItem{
  value?: string | number;
  icon?: string;
  placement?: 'left' | 'right';
  children?: ReactNode
}
const ListItem = ({ value='', icon = '', placement, children }: ListItem) => {
  const item = placement === 'left' ? icon + value : value + icon;
  return <li>{item ? item : children}</li>
}

export default ListItem;