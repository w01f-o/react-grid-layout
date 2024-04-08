import type { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import "./Row.scss";

const Row: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx("row", {
        [`${className}`]: className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Row;
