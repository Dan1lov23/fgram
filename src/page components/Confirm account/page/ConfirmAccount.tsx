import "./confirmAccount.css";

import { useParams, Navigate } from "react-router-dom";

import ConfirmAccountTitle from "../components/confirm account title/ConfirmAccountTitle.tsx";
import ConfirmAccountButton from "../components/confirm account button/ConfirmAccountButton.tsx";

export default function ConfirmAccount() {

    const { username } = useParams();

    console.log(localStorage.getItem("username"), username);

    return (
        <>
            <div className="confirmAccount">
                {localStorage.getItem("username") === username ? (
                    <div>
                        <ConfirmAccountTitle/>
                        <ConfirmAccountButton/>
                    </div>
                ) : (
                    <Navigate to="/*"/>
                )}
            </div>
        </>
    )
}