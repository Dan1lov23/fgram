async function getAllChatsFunction(username: string | null) {
    const res = await fetch('http://localhost:3000/api/chats/getAllUserChats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username})
    })

    const data = await res.json();

    if (res.status === 201) {
        console.log(data.chats);
        return data.chats;
    }

}

export { getAllChatsFunction };
