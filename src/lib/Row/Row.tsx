import type { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./row.module.scss";

interface RowProps extends HTMLAttributes<HTMLDivElement> {}

const Row: FC<RowProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(styles.row, {
        [`${className}`]: className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Row;
