'use client';

import SubmitButton from "../Buttons/SubmitButton";
import Button from '@/components/Buttons/Button';
import { useFormState } from "react-dom";
import { register } from "@/actions/register";

export default function RegisterForm() {
    const [state, action] = useFormState(register, undefined);
    return (
        <div className="grid grid-cols-2">
            <div className="grid justify-stretch">
                <form action={action} className="m-6">
                    <h1 className="text-xl font-extralight mb-6">Login</h1>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold" htmlFor="username">USERNAME</label>
                        <input className="bg-gray-100 h-10 w-full rounded-full text-xs px-3 py-1 flex items-center" id="username" name="username" type="text" placeholder="Your username"/>
                        {state?.errors?.username && <p>{state.errors.username}</p>}
                        <label className="text-xs font-bold" htmlFor="password">PASSWORD</label>
                        <input className="bg-gray-100 h-10 w-full rounded-full text-xs px-3 py-1 flex items-center" id="password" name="password" type="password" placeholder="Your password" required/>
                        {state?.errors?.password && (
                        <div>
                            <p>Password must:</p>
                            <ul>
                                {state.errors.password.map((error: string) => (
                                    <li key={error}>- {error}</li>
                                ))}
                            </ul>        
                        </div>
                        )}
                        <SubmitButton className="bg-red-500 hover:bg-red-400 px-2 py-1 rounded-full text-xs text-white h-10">Login</SubmitButton>
                    </div>
                </form>
            </div>
            <div className="bg-red-500 flex justify-center flex-col gap-2 ">
                <div className="m-6 align-center">
                    <h1 className="text-xl font-bold text-white">Welcome to Social Network!</h1>
                    <p className="text-white">Dont have an account?</p>
                    <Button className="border border-white px-4 py-1 rounded-full text-xs text-white h-10">Sign Up</Button>
                </div>
                
            </div>
        </div> 
    );
};