import "./mobileMenuButtonLinToSettings.css";

import {useLocation} from "react-router-dom";

import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";

export default function MobileMenuButtonLinToSettings() {

    const location = useLocation();

    return (
        <>
            <div className="mobileMenuButtonLinkToMainPanel">
                {location.pathname === "/settings" ? (
                    <Link to="/settings">
                        <p style={{color: "var(--primary-color)"}}>Chats <FontAwesomeIcon icon={faGear}/></p>
                    </Link>
                ) : (
                    <Link to="/settings">
                        <p>Settings <FontAwesomeIcon icon={faGear}/></p>
                    </Link>
                )}
            </div>
        </>
    )
}
