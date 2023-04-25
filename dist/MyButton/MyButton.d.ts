import React, { FC } from 'react';
export interface MyButtonProps {
    children: React.ReactNode;
    color: string;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
