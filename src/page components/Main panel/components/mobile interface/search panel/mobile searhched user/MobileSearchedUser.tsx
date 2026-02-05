import "./mobileSearchedUser.css";

import {useDispatch} from "react-redux";

import {setIsOpenChat} from "../../../../../../redux/slices/is open chat slice/isOpenChatSlice.ts";
import {setActualChat} from "../../../../../../redux/slices/actual chat slice/actualChatSlice.ts";

import {getChatFunction} from "../../../../../../API/messages API functions/messagesApiFunctions.ts";

export default function MobileSearchedUser({username}:{username:string}) {

    const dispatch = useDispatch();

    const setActualChatFunction = async () => {
        dispatch(setIsOpenChat(true));
        const messages = await getChatFunction(localStorage.getItem("username"), username);
        dispatch(setActualChat(messages));
        localStorage.setItem("companion", username);
    }

    return (
        <>
            <div className="mobileSearchedUser" onClick={() => setActualChatFunction()}>
                <p className="searchUserIcon">?</p>
                <p>{username}</p>
            </div>
        </>
    )
}