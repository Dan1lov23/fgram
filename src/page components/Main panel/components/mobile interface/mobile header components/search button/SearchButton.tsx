import "./searchButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function SearchButton({isSearchPanelOpen, setIsSearchPanelOpen}:{isSearchPanelOpen:boolean, setIsSearchPanelOpen: any}) {
    return (
        <>
            <div className="searchButton">
                <p onClick={() => setIsSearchPanelOpen(!isSearchPanelOpen)}>
                    <FontAwesomeIcon icon={faSearch}/>
                </p>
            </div>
        </>
    )
}