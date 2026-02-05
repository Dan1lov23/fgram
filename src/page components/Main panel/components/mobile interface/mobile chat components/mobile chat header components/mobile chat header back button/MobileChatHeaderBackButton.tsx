import "./mobileChatHeaderBackButton.css";

import {useDispatch} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {setIsOpenChat} from "../../../../../../../redux/slices/is open chat slice/isOpenChatSlice.ts";

export default function MobileChatHeaderBackButton() {

    const dispatch = useDispatch();

    return (
        <>
            <div className="mobileChatHeaderBackButton" onClick={() => dispatch(setIsOpenChat(false))}>
                <p>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </p>
            </div>
        </>
    )
}