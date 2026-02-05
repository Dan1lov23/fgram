import "./confirmAccountButton.css";

import { useNavigate } from "react-router-dom";

import { activateAccountFunction } from "../../../../API/auth API functions/activate account function/activateAccountFunction.ts";

export default function ConfirmAccountButton() {

    const navigate = useNavigate();

    return (
        <>
            <div className="confirmAccountButton">
                <button onClick={() =>activateAccountFunction(navigate)}>
                    CONFIRM
                </button>
            </div>
        </>
    )
}