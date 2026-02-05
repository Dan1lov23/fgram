import {useSelector} from "react-redux";

import ChatHeader from "../chat header components/chat header/ChatHeader.tsx";
import DesktopInterfaceMessagesList from "../messages list/MessagesList.tsx";
import SendInputAndMessageButton from "../send input and button/SendInputAndButton.tsx";

export default function Chat() {

    const isOpenChat = useSelector((state:any) => state.isOpenChat.isOpenChat);

    return (
        <>
            {isOpenChat ? (
                <div className="desktopInterfaceChat">
                    <ChatHeader/>
                    <DesktopInterfaceMessagesList/>
                    <SendInputAndMessageButton/>
                </div>
            ) : (
                <p></p>
            )}
        </>
    )
}
