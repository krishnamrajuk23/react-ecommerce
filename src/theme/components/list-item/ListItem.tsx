import { ReactNode } from "react";

interface ListItem{
  value: string | number;
  icon?: string;
  placement?: 'left' | 'right';
}
const ListItem = ({ value, icon = '', placement }: ListItem) => {
  const item = placement === 'left' ? icon + value : value + icon;
  return <li>{item}</li>
}

export default ListItem;