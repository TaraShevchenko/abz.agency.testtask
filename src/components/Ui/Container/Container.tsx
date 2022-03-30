import { FC, ReactNode, CSSProperties } from "react";
import cn from "classnames";

import "./Container.scss";

type ContainerProps = {
  className?: string;
  children?: ReactNode;
  styles?: CSSProperties;
}

const Container: FC<ContainerProps> = ({ children, className, styles }) => (
    <div style={styles} className={cn("container", className)}>{children}</div>
);

export default Container;
