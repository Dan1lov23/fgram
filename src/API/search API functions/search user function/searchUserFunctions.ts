async function searchUserFunction(username:string, setSearchedUser: (user:any) => void) {

    const res = await fetch('http://localhost:3000/api/search/searchUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username }),
    });

    const data = await res.json();

    if (username.length === 0) {
        setSearchedUser("0Len");
        return;
    }

    if (res.status === 201) {
        setSearchedUser(data.user);
        localStorage.setItem("userForSearch", username);
    } else {
        setSearchedUser("User not found")
    }

}

export { searchUserFunction };
