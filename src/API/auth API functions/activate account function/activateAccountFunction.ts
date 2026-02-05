async function activateAccountFunction(navigate: any) {
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

export { activateAccountFunction };
