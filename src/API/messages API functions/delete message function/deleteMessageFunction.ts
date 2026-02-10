async function deleteMessageFunction(username:string | null, messageId:number, windowCloseFunction: () => void) {
    fetch('http://localhost:3000/api/messages/deleteMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username:username, messageId:messageId}),
    })
    windowCloseFunction();
}

export {deleteMessageFunction};
