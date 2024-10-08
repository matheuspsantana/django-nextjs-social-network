import React from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton = ({children, className}: ButtonProps) => {
    const { pending } = useFormStatus();
    return (
        <button 
            disabled={pending}
            type="submit"
            className={`
                ${className}`}>
            {children}
        </button>
    );
};
export default SubmitButton;