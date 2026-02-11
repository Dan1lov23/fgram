async function checkActivatedFunction() {

    const res = await fetch('http://localhost:3000/api/auth/checkActivated', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: localStorage.getItem('username'), password: localStorage.getItem('password')}),
    })

    if (res.status === 201) {
        return true;
    } else {
        return false;
    }

    return false;

}

export { checkActivatedFunction };
