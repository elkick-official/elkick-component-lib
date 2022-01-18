import { MouseEventHandler, FC } from 'react';

interface ButtonProps {
    type: 'primary' | 'secondary' | 'error';
    text: string;
    variant: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

declare const LHCButton: FC<ButtonProps>;

export { LHCButton };
