import ActiveChatPanel from "../active chat panel/ActiveChatPanel.tsx";

export default function ChatsList({chatsList}:{chatsList:any}) {
    return (
        <>
            <div className="chatsList">
                {chatsList.map((chat:any) => (
                    <ActiveChatPanel chat={chat}/>
                ))}
            </div>
        </>
    )
}
