import "./activeChatPanel.css";

export default function ActiveChatPanel({chat}:{chat:any}) {
    return (
        <>
            <div className="activeСhatPanel">
                <p>{chat.username}</p>
            </div>
        </>
    )
}
