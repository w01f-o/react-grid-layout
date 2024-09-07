import type { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import "./col.scss";

interface ColProps extends HTMLAttributes<HTMLDivElement> {
  xxl?: number;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}

const Col: FC<ColProps> = ({
  xxl,
  xl,
  lg,
  md,
  sm,
  xs,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx({
        [`col-xxl-${xxl}`]: xxl,
        [`col-xl-${xl}`]: xl,
        [`col-lg-${lg}`]: lg,
        [`col-md-${md}`]: md,
        [`col-sm-${sm}`]: sm,
        [`col-${xs}`]: xs,
        [`${className}`]: className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Col;
