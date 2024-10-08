import React from "react";

type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton = ({children, className}: ButtonProps) => {
    return (
        <button 
            className={`
                ${className}`}>
            {children}
        </button>
    );
};
export default SubmitButton;