import type {NavigateFunction} from "react-router-dom";

import registerCheckFunction from "../../../Other functions/register check function/RegisterCheckFunction.ts";

async function registerFunction(username: string, password: string, passwordRepeat: string, email:string, navigate: NavigateFunction, error:string, setError: (error: string) => void) {

    registerCheckFunction(username, password, passwordRepeat, email, setError);

    if (error.length === 0) {
        const res = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 201) {
            navigate('/login');
            localStorage.setItem("isActivated", "false");
        } else {
            if (data.marker === "fail") {
                setError(data.error);
            }
        }
    } else {
        // console.log("Login error");
    }
}

export { registerFunction };
