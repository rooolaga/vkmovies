import { ReactNode } from "react";
import { Navbar, NavbarItemType } from "@/widgets/Navbar";
import cls from './MainLayout.module.scss'

export interface MainLayoutProps {
  children?: ReactNode;
}

const navItems: NavbarItemType[] = [
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Избранное',
    to: '/favorites'
  },
]

export const MainLayout = ({children}: MainLayoutProps) => {


  return (
    <div className={cls.mainLayout}>

      <header>
        <Navbar items={navItems} />
      </header>

      <main className={cls.content}>
        {children}
      </main>
    </div>
  )
}
