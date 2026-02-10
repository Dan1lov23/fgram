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

export { deleteAllMessagesInChatFunction};
