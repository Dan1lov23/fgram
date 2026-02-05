import "./chatHeaderBackButton.css";

import {useDispatch} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

import {setIsOpenChat} from "../../../../../../../redux/slices/is open chat slice/isOpenChatSlice.ts";

export default function ChatHeaderBackButton() {

    const dispatch = useDispatch();

    return (
        <>
            <div className="chatHeaderBackButton" onClick={() => dispatch(setIsOpenChat(false))}>
                <p>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </p>
            </div>
        </>
    )
}