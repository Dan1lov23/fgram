import "./navBar.css";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faGear } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from 'react-router-dom';

export default function NavBar() {

    const location = useLocation();

    return (
        <>
            <div className="navBar">
                {location.pathname === "/" ? (
                    <Link to="/">
                        <p>
                            <FontAwesomeIcon icon={faComment} color="var(--primary-color)"/>
                        </p>
                    </Link>
                ) : (
                    <Link to="/">
                        <p>
                            <FontAwesomeIcon icon={faComment}/>
                        </p>
                    </Link>
                )}
                {location.pathname === "/settings" ? (
                    <Link to="/settings">
                        <p>
                            <FontAwesomeIcon icon={faGear} color="var(--primary-color)"/>
                        </p>
                    </Link>
                ) : (
                    <Link to="/settings">
                        <p>
                            <FontAwesomeIcon icon={faGear}/>
                        </p>
                    </Link>
                )}
            </div>
        </>
    )
}
