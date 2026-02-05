import "./confirmAccountButton.css";

import { useNavigate } from "react-router-dom";

import { activateAccount } from "../../../../API/auth API functions/authApiFunctions.ts";

export default function ConfirmAccountButton() {

    const navigate = useNavigate();

    return (
        <>
            <div className="confirmAccountButton">
                <button onClick={() => activateAccount(navigate)}>
                    CONFIRM
                </button>
            </div>
        </>
    )
}