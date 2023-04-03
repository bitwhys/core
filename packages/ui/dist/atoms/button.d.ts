import * as React from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children: React.ReactNode;
};
declare const Button: ({ children, variant, size, leftIcon, rightIcon }: ButtonProps) => JSX.Element;

export { Button, ButtonProps };
