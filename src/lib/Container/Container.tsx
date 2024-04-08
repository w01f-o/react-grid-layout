import type { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import "./Container.scss";

const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx("container", {
        [`${className}`]: className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
