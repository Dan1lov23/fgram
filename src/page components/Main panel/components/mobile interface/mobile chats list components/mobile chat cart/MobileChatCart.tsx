import "./mobileChatCart.css";

import {useDispatch} from "react-redux";

import {setIsOpenChat} from "../../../../../../redux/slices/is open chat slice/isOpenChatSlice.ts";
import MessageUserIcon from "../../../../../../UI components/message user icon/MessageUserIcon.tsx";

export default function MobileChatCart({username, iconSrc}:{username:string, iconSrc:string}) {

    const dispatch = useDispatch();

    const setActualChatFunction = async () => {
        localStorage.setItem("companion", username);
        localStorage.setItem("companionIconSrc", iconSrc);
        dispatch(setIsOpenChat(true));
    }

    return (
        <>
            <div className="mobileChatCart" onClick={() => setActualChatFunction()}>
                <MessageUserIcon iconSrc={iconSrc}/>
                <p>{username}</p>
            </div>
        </>
    )
}