const registerCheckFunction = (username:string, password:string, passwordRepeat:string, email:string, setError: (error:string) => void) => {

    setError("");

    if (!username.trim()) {
        setError("Username cannot be empty");
        return;
    }

    if (username.length < 3) {
        setError("Username must be at least 3 characters long");
        return;
    }

    if (!password) {
        setError("Password cannot be empty");
        return;
    }
    if (password.length < 6) {
        setError("Password must be at least 6 characters long");
        return;
    }

    if (password !== passwordRepeat) {
        setError("Passwords do not match");
        return;
    }

    if (!email) {
        setError("Email cannot be empty");
        return;
    }

    return;
}

export default registerCheckFunction;
