import type { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
  resetOffset?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  fluid,
  resetOffset,
  ...props
}) => {
  return (
    <div
      className={clsx({
        [styles.containerFluid]: fluid,
        [styles.container]: !fluid,
        "offset-0": resetOffset,
        [`${className}`]: className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
