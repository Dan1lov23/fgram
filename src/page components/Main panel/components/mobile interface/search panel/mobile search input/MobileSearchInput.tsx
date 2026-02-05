import "./mobileSearchInput.css";

import {searchUserFunction} from "../../../../../../API/search API functions/search user function/searchUserFunctions.ts";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function MobileSearchInput({setSearchedUser}:{setSearchedUser: (user:any) => void}) {

    return (
        <>
            <div className="mobileSearchInput">
                <div className="inputWrapper">
                    <input onChange={(e) => searchUserFunction(e.target.value, setSearchedUser)} placeholder=" Search a friend"/>
                    <FontAwesomeIcon icon={faSearch} className="icon-user" fontSize="20px" color="white"/>
                </div>
            </div>
        </>
    )
}
