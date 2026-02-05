import {useSelector} from "react-redux";

import SearchUserError from "../../../desktop interafce/search panel component/search user error/SearchUserError.tsx";
import MobileSearchedUser from "../mobile searhched user/MobileSearchedUser.tsx";

export default function MobileSearchPanel({searchedUser}:{searchedUser:any}) {

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
            <div className="MobileSearchPanel">
                {searchedUser === undefined ? (
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
                            <MobileSearchedUser username={searchedUser.username} />
                        ) : (
                            <SearchUserError/>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}