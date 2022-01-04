import { MouseEventHandler, FC } from 'react';

interface ButtonProps {
    children: JSX.Element | JSX.Element[] | string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<ButtonProps>;

export { Button };
