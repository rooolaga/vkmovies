import { NavLink, To} from 'react-router-dom'
import cls from './Navbar.module.scss'
import logo from '@/shared/assets/logo.svg'

export interface NavbarItemType {
  title: string;
  to: To;
}

export interface NavbarProps {
  items: NavbarItemType[];
}


export const Navbar = ({ items }: NavbarProps) => {

  return (
    <nav className={cls.navbar}>
      <NavLink to='/' className={cls.logo}>
        <img src={logo} alt="to Movies homepage" loading="lazy"/>
      </NavLink>
      <ul className={cls.navbarNav} role="menubar">
        {items.map((item, index) => (
          <li role='none' key={index}>
            <NavLink to={item.to} className={cls.navLink} role='menuitem'>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
