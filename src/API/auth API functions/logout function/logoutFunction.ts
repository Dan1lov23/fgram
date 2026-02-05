async function logoutFunction() {
    localStorage.setItem("token", "");
    localStorage.setItem("username", "");
    window.location.reload();
}

export { logoutFunction };
