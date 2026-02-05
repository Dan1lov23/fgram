async function getChatFunction(user1: string | null, user2: string | any): Promise<any> {
    const response = await fetch('http://localhost:3000/api/messages/getMessages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user1: user1, user2: user2 }),
    });
    const data = await response.json();
    return data.messages;
}

export { getChatFunction };
