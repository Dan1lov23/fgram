import "./confirmAccount.css";

import { useParams, Navigate } from "react-router-dom";

import ConfirmAccountTitle from "../components/confirm account title/ConfirmAccountTitle.tsx";
import ConfirmAccountButton from "../components/confirm account button/ConfirmAccountButton.tsx";

export default function ConfirmAccount() {

    const { username } = useParams();

    return (
        <>
            <div className="confirmAccount">

                    <div>
                        {localStorage.getItem("username") === username ? (
                            <div>
                                <ConfirmAccountTitle/>
                                <ConfirmAccountButton/>
                            </div>
                        ) : (
                            <Navigate to="/*"/>
                        )}
                    </div>
            </div>
        </>
    )
}
