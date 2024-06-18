import { ButtonHTMLAttributes } from "react";
import cls from './Button.module.scss'
import clsx from "clsx";

export const Button = ({className, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={clsx(cls.button, className)}/>
  )
}
