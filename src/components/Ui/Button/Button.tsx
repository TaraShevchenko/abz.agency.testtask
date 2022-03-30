import {FC, ReactNode} from "react";
import cn from "classnames";

import style from "./Button.module.scss";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
 children,
 className,
 onClick
}) => (
  <button
    onClick={onClick}
    children={children}
    className={cn(style.button, className)}
  />
);

export default Button;
