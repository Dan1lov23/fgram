import "./mobileChatHeader.css";

import MobileChatHeaderBackButton from "../mobile chat header back button/MobileChatHeaderBackButton.tsx";
import MobileHeaderDeleteChatButton from "../mobile header delete chat button/MobileHeaderDeleteChatButton.tsx";

export default function MobileChatHeader() {
    return (
        <>
            <div className="mobileChatHeader">
                <MobileChatHeaderBackButton/>
                <MobileHeaderDeleteChatButton/>
            </div>
        </>
    )
}
