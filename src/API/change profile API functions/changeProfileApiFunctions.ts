import type {NavigateFunction} from "react-router-dom";

async function changePasswordFunction(oldPassword:string, newPassword:string, username:string | null, token:string | null, setError: (error:string) => void, navigate: NavigateFunction) {
    setError("");
    fetch("http://localhost:3000/api/changeProfile/changePassword", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({oldPassword:oldPassword, newPassword:newPassword, username: username, token:token}),
    })
    .then(res => res.json())
    .then(data => {
        if (data.marker === "fail") {
            setError(data.message);
        } else if (data.marker === "success") {
            console.log(data.marker)
            navigate('/');
        }
    })
}

async function changeUsernameFunction(oldUsername: null | string, newUsername:string) {
    fetch('http://localhost:3000/api/changeProfile/changeUsername', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({oldUsername: oldUsername, newUsername: newUsername}),
    })
    .then(res => res.json())
    .then(data => {
        if (data.marker === "true") {
            localStorage.setItem("username", newUsername);
        } else {
            console.log("Операция прошла не успешно");
        }
    })
}

async function changeIconFunction(formData:any) {
    fetch('http://localhost:3000/api/changeProfile/changeAvatar', {
        method: 'POST',
        body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
        localStorage.setItem("iconSrc", data.path);
        window.location.reload();
    })
}

async function deleteAccountFunction(username:string | null, token:string | null) {
    fetch('http://localhost:3000/api/changeProfile/deleteAccount', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username:username, token:token}),
    })
    .then(res => res.json())
    .then(data => {
        if (data.marker === "success") {
            window.location.reload();
        }
    })
    window.location.reload();
}

export {changePasswordFunction, changeUsernameFunction, changeIconFunction, deleteAccountFunction};
