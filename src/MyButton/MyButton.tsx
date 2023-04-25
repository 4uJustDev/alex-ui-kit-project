import React, {FC} from 'react';

export interface MyButtonProps{
    children: React.ReactNode
    color: string;
}

const MyButton: FC<MyButtonProps> = ({children, color,...props}) => {
    return(
        <button {...props} style={{color}}>
            {children}
        </button>
    );
};

export default MyButton;