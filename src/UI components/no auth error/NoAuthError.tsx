import "./noAuthError.css";

import {useNavigate} from "react-router-dom";

export default function NoAuthError() {

    const navigate = useNavigate();

    return (
        <>
            <div className="noAuthError">
                <p>You are not authenticated.</p>
                <p className="link" onClick={() => navigate("/login")}>Log in.</p>
            </div>
        </>
    )
}
