async function updateMessageFunction(messageId:number, newMessage:string, windowCloseFunction: () => void) {
    fetch('http://localhost:3000/api/messages/updateMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({messageId: messageId, newMessage:newMessage}),
    })
    windowCloseFunction();
}

export {updateMessageFunction};
