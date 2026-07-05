import type { ImgHTMLAttributes, JSX, PropsWithChildren } from "react";

import cn from "@/shared/lib/cn";

import styles from "./Logo.module.css";

const bem = cn("Logo");

type ImageProps = {
  src: string;
  alt: string;
};

type Props = PropsWithChildren &
  Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> &
  Partial<ImageProps>;

export const Logo = ({ src, alt = "", children, className, ...props }: Props): JSX.Element => {
  const logoClassName = className ? `${styles[bem()]} ${className}` : styles[bem()];

  if (children) return <span className={logoClassName}>{children}</span>;
  if (src) {
    return (
      <img
        className={logoClassName}
        src={src}
        alt={alt}
        {...props}
      />
    );
  }

  return <span className={logoClassName} aria-hidden />;
};
