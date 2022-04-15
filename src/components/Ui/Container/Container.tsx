import { FC, ReactNode, CSSProperties } from "react";
import cn from "classnames";

import "./Container.scss";

type ContainerProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Container: FC<ContainerProps> = ({ className, ...props }) => (
    <div {...props} className={cn("container", className)}/>
);

export default Container;
