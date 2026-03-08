async function sendMessageFunction(
    sender: string | null,
    recipient: string | null,
    messageText: string,
    messageTime: number,
    setMessage: (message: string) => void
) {
    if (messageText.length > 0) {
        await fetch('http://localhost:3000/api/messages/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sender, recipient, messageText, messageTime }),
        });
        setMessage("");
    }
}

export { sendMessageFunction };