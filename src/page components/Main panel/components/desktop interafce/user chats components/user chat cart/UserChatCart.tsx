import "./userChatCart.css";

import {useDispatch} from "react-redux";

import {setIsOpenChat} from "../../../../../../redux/slices/is open chat slice/isOpenChatSlice.ts";
import UserIconForChatCart from "../../../../../../UI components/user icon for chat cart/UserIconForChatCart.tsx";

export default function UserChatCart({username, iconSrc}:{username:string, iconSrc:string}) {

    const dispatch = useDispatch();

    const setActualChatFunction = async () => {
        localStorage.setItem("companion", username);
        localStorage.setItem("companionIconSrc", iconSrc);
        dispatch(setIsOpenChat(true));
    }

    return (
        <>
            <div className="userChatCart" onClick={() => setActualChatFunction()}>
                {localStorage.getItem('companion') === username ? (
                    <div className="userChatCartSelect">
                        <UserIconForChatCart iconSrc={iconSrc}/>
                        <p>{username}</p>
                    </div>
                ) : (
                    <div className="userChatCartDefault">
                        <UserIconForChatCart iconSrc={iconSrc}/>
                        <p>{username}</p>
                    </div>
                )}
            </div>
        </>
    )
}