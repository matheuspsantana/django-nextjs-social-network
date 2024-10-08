'use server';

import { RegisterFormSchema, FormState } from "@/lib/definitions";
import { API } from '@/services/Api';
export async function register(state: FormState, formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    // Validating form fields
    const validatedFields = RegisterFormSchema.safeParse({
        username: username,
        password: password
    });
    // Checking of some of the fields were invalid and return to the UI
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    } else {
        const api = new API();
        const response = await api.register(
            username, 
            password);
        const result = await response.json();
        return result;

    }
    // simulating success on the form validation
    
}