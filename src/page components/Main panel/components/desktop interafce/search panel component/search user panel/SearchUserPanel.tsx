import "./searchUserPanel.css";

import {useDispatch} from "react-redux";

import {getChatFunction} from "../../../../../../API/chats API functions/get chat function/getChatFunction.ts";

import {setActualChat} from "../../../../../../redux/slices/actual chat slice/actualChatSlice.ts";
import {setIsOpenChat} from "../../../../../../redux/slices/is open chat slice/isOpenChatSlice.ts";

import UserIconForChatCart from "../../../../../../UI components/user icon for chat cart/UserIconForChatCart.tsx";

export default function SearchUserPanel({searchUser}:{searchUser:any}) {

    const dispatch = useDispatch();

    const setActualChatFunction = async () => {
        dispatch(setIsOpenChat(true));
        const messages = await getChatFunction(localStorage.getItem("username"), searchUser.username);
        dispatch(setActualChat(messages));
        localStorage.setItem("companion", searchUser.username);
    }

    return (
        <>
            <div className="searchUserPanel" onClick={() => setActualChatFunction()}>
                <UserIconForChatCart iconSrc={searchUser.iconSrc}/>
                <p>{searchUser.username}</p>
            </div>
        </>
    )
}