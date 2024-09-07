import type { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  fluid,
  ...props
}) => {
  return (
    <div
      className={clsx({
        [`${className}`]: className,
        [styles.containerFluid]: fluid,
        [styles.container]: !fluid,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
