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
export {checkSessionFunction};
