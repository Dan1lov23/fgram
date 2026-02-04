import "./mobileMenuButtonLinkToMainPanel.css";

import {useLocation} from "react-router-dom";

import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons";

export default function MobileMenuButtonLinkToMainPanel() {

    const location = useLocation();

    return (
        <>
            <div className="mobileMenuButtonLinkToMainPanel">
                {location.pathname === "/" ? (
                    <Link to="/">
                        <p style={{color: "var(--primary-color)"}}>Chats <FontAwesomeIcon icon={faComment}/></p>
                    </Link>
                ) : (
                    <Link to="/">
                        <p>Chats <FontAwesomeIcon icon={faComment}/></p>
                    </Link>
                )}
            </div>
        </>
    )
}
