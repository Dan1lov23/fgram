import "./linkToRegister.css";

import {Link} from "react-router-dom";

export default function LinkToRegister() {
    return (
        <>
            <div className="linkToRegister">
                <Link to="/register">
                    <p>Have an account? Register</p>
                </Link>
            </div>
        </>
    )
}