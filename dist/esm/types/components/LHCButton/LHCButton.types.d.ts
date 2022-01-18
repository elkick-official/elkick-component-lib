import { MouseEventHandler } from 'react';
export interface ButtonProps {
    type: 'primary' | 'secondary' | 'error';
    text: string;
    variant: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
