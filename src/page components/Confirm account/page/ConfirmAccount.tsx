import "./confirmAccount.css";

import { useEffect, useState } from "react";

import { useParams, Navigate } from "react-router-dom";

import ConfirmAccountTitle from "../components/confirm account title/ConfirmAccountTitle.tsx";
import ConfirmAccountWarning from "../../../UI components/account is confirm warning/ConfirmAccountWarning.tsx";
import ConfirmAccountButton from "../components/confirm account button/ConfirmAccountButton.tsx";

import { checkActivatedFunction } from "../../../API/auth API functions/check activated function/checkActivatedFunction.ts";

export default function ConfirmAccount() {

    const { username } = useParams();

    const [checkActivated, setCheckActivated] = useState(false);

    useEffect(() => {

        const checkActivated = async() => {

            const check = await checkActivatedFunction();

            if (check) {
                setCheckActivated(true)
            }
        }

        checkActivated();

    })

    return (
        <>
            <div className="confirmAccount">
                {checkActivated ? (
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
                ) : (
                    <ConfirmAccountWarning/>
                )}
            </div>
        </>
    )
}