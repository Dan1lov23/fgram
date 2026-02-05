import type { NavigateFunction } from "react-router-dom";

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

export { loginFunction };