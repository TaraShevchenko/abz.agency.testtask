import {FC, ReactNode, ButtonHTMLAttributes} from "react";
import cn from "classnames";

import style from "./Button.module.scss";

type ButtonProps = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({className, disabled, ...props}) => (
  <button
    {...props}
    className={cn(style.button, {[style.disabled]: disabled}, className)}
  />
);

export default Button;
