

async function sendMessageFunction(sender:string | null, recipient:string | null, messageText:string, messageTime:number, setMessage:(message:string) => void) {

    if (messageText.length > 0) {
        fetch('http://localhost:3000/api/messages/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({sender:sender, recipient:recipient, messageText:messageText, messageTime:messageTime}),
        })
        setMessage("");
    } else {
       // console.log("No error");
    }
}

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

async function deleteAllMessagesInChatFunction(user1: string | null,  user2:string | null, closeWindowFunction: () => void, dispatch:any, setIsOpenChat: (isOpen:boolean) => void) {
    fetch('http://localhost:3000/api/messages/deleteAllMessagesInChat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user1:user1, user2:user2}),
    })
    closeWindowFunction();
    dispatch(setIsOpenChat(false));
}

export { sendMessageFunction, deleteMessageFunction, updateMessageFunction, deleteAllMessagesInChatFunction};
