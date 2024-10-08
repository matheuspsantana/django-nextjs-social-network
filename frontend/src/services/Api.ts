
export class API {
    private baseUrl: string = `http://${process.env.API_HOST}:${process.env.API_PORT}`;

    async register(username: string, password: string) {
        const response = await fetch(`${this.baseUrl}/api/user/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username, 
                'password': password
            })
        });
        return response; 
    }
}