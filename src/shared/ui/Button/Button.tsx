import { ButtonHTMLAttributes, memo } from 'react';

import { classNames } from '../../lib';
import type { Mods } from '../../lib';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    className = '',
    theme = ButtonTheme.OUTLINE,
    square,
    disabled,
    size = ButtonSize.M,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames({ cls: cls.Button, additional: [className, cls[theme]], mods })}
      {...otherProps}
    >
      {children}
    </button>
  );
});
