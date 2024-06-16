import { ReactNode } from "react";
import { Navbar, NavbarItemType } from "@/widgets/Navbar";
import cls from './MainLayout.module.scss'
import { MovieCard } from "@/entities/Movie/ui/MovieCard/MovieCard";
import logo from '@/shared/assets/logo.svg'

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
    to: '/'
  },
]

export const MainLayout = ({children}: MainLayoutProps) => {


  return (
    <div className={cls.mainLayout}>

      <Navbar items={navItems} />

      <div className={cls.movieList}>
        <MovieCard id={1} title="Яйцо со шрамом" src={logo} />
        <MovieCard id={1} title="Яйцо со шрамом" src={logo} />
        <MovieCard id={1} title="Яйцо со шрамом" src={logo} />
        <MovieCard id={1} title="Яйцо со шрамом" src={logo} />
        <MovieCard id={1} title="Яйцо со шрамом" src={logo} />
        <MovieCard id={1} title="Яйцо со шрамом" src={logo} />
        <MovieCard id={1} title="Яйцо со шрамом" src={logo} />
      </div>

      {children}
    </div>
  )
}
