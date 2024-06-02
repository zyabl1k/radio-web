import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarCard {
  icon: JSX.Element;
  link: string;
  text: string;
}

export const NavbarCard: FunctionComponent<NavbarCard> = ({
  icon,
  link,
  text
}) => {

  return (
    <div className="hover:text-blue-400 flex flex-row gap-2 justify-center items-center p-2 rounded-md">
      {icon}
      <NavLink to={link}>{text}</NavLink>
    </div>
  );
}