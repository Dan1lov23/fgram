async function getAllUserChats(username:string | null) {

    const response = await fetch("http://localhost:3000/api/chats/getAllUserChats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username: username})
    })

    const data = await response.json();

    if (response.status === 201) {
        return data.chats;
    }

    return "no chats";

}

export {getAllUserChats};
