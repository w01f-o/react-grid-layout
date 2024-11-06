import type { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./row.module.scss";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  resetOffset?: boolean;
}

const Row: FC<RowProps> = ({ children, className, resetOffset, ...props }) => {
  return (
    <div
      className={clsx(styles.row, {
        "offset-0": resetOffset,
        [`${className}`]: className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Row;
