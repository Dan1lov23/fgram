import {type NavigateFunction} from "react-router-dom";

import registerCheckFunction from "../../Other functions/register check function/RegisterCheckFunction.ts";

async function loginFunction(username:string, password:string, navigate:NavigateFunction, setError: (error:string) => void) {

    setError("");

    if (username.length === 0 || password.length === 0) {
        setError("Enter params");
    } else {
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (res.status === 201) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);
            localStorage.setItem("iconSrc", data.iconSrc);
            localStorage.setItem("email", data.email);
            localStorage.setItem("isActivated", data.isActivated);
            navigate('/');
            window.location.reload();
        } else {
            setError(data.error);
        }
    }

}

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

async function activateAccount(navigate: any) {
    const res = await fetch('http://localhost:3000/api/auth/activatedAccount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: localStorage.getItem("email")}),
    })

    if (res.status === 201) {
        localStorage.setItem("isActivated", "true");
        navigate('/');
    }

}

async function logoutFunction() {
    localStorage.setItem("token", "");
    localStorage.setItem("username", "");
    window.location.reload();
}

async function checkSessionFunction(username:string | null, token:string | null, setSessionCheckMarker: (sessionCheckMarker:boolean) => void) {
    fetch('http://localhost:3000/api/auth/sessionCheck', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, token: token}),
    })
    .then(res => res.json())
    .then(data => {
        if (data.marker === true) {
            setSessionCheckMarker(true);
        } else {
            setSessionCheckMarker(false);
        }
    })
}

export { loginFunction, registerFunction, activateAccount, logoutFunction, checkSessionFunction };
