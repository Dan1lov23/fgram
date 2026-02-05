import MobileMessagesList from "../mobile messages list/MobileMessagesList.tsx";
import MobileSendInputAndMessageButton from "../mobile send input and button/MobileSendInputAndButton.tsx";
import MobileChatHeader from "../mobile chat header components/mobile chat header/MobileChatHeader.tsx";

export default function MobileChat() {

    return (
        <>
            <div className="mobileChat">
                <MobileChatHeader/>
                <MobileMessagesList/>
                <MobileSendInputAndMessageButton/>
            </div>
        </>
    )
}