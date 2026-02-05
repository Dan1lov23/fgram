import {useState} from 'react'

import {useSelector} from "react-redux";

import SearchInput from "../search input/SearchInput.tsx";
import SearchUserPanel from "../search user panel/SearchUserPanel.tsx";
import SearchUserError from "../search user error/SearchUserError.tsx";

export default function SearchPanel() {

    const [searchedUser, setSearchedUser] = useState<any>("none");

    const chats = useSelector((state:any) => state.chats.chats);

    const checkInclude = (user:any) => {
        for (let a = 0; a < chats.length; a++) {
            if (chats[a] === user.username) {
                return true;
            }
        }
        return false;
    }

    return (
        <>
            <div className="searchPanelDesktop">
                <SearchInput setSearchedUser={setSearchedUser} />
                {searchedUser === "none" ? (
                    <div></div>
                ) : checkInclude(searchedUser) ? (
                    <div></div>
                ) : searchedUser === "User not found" ? (
                    <SearchUserError/>
                ) : searchedUser === "0Len" ? (
                   <div></div>
                ) : (
                    <div>
                        {searchedUser.username !== localStorage.getItem("username") ? (
                            <SearchUserPanel searchUser={searchedUser} />
                        ) : (
                            <SearchUserError/>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}
