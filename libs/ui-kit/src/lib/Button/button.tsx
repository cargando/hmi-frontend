
import cn from 'classnames';
import React, { FC } from 'react';
import s from './Button.module.scss';

export enum TButtonColor {
  black = 'Black',
  red = 'Red',
  gray = 'Gray',
}
export enum TButtonType {
  link = 'Link',
  button = 'Button',
}

export type TButtonProps = {
  title?: string; // title is in priority to children
  type?: TButtonType;
  color?: TButtonColor;
  href?: string;
  wrapColumn?: boolean;
  onClick?: (e: any) => void;
  className?: string;
  children?: React.ReactNode; // title is in priority to children
};

export const Button: FC<TButtonProps> = ({
                                           title,
                                           type = TButtonType.button,
                                           color = TButtonColor.black,
                                           onClick,
                                           href,
                                           wrapColumn = false,
                                           className,
                                           children,
                                         }) => {
  if (!title && !children) {
    console.error('Button needs title or children');
    return null;
  }

  const control =
    type === TButtonType.link ? (
      <a href={href} className={cn(s.button, s[`button${color}`], className)}>
        {title || children}
      </a>
    ) : (
      <button
        className={cn(s.button, s[`button${color}`], className)}
        onClick={onClick}
      >
        {title || children}
      </button>
    );
  return wrapColumn ? (
    <div className={s.buttonWrapper}>{control}</div>
  ) : (
    control
  );
};


export default Button;
