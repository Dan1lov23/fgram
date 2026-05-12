import "./linkToRegister.css";

import {Link} from "react-router-dom";

export default function LinkToLogin() {
    return (
        <>
            <div className="linkToLogin">
                <Link to="/login">
                    <p>Have an account? Login</p>
                </Link>
            </div>
        </>
    )
}