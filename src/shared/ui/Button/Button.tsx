import { ButtonHTMLAttributes } from "react";
import cls from './Button.module.scss'
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export const Button = ({className, isActive, ...props}: ButtonProps) => {
  return (
    <button {...props} className={clsx(cls.button, className, isActive && cls.selected)}/>
  )
}
