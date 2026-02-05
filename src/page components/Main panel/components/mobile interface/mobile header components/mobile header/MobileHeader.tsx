import "./mobileHeader.css";

import SearchButton from "../search button/SearchButton.tsx";
import MenuButton from "../menu button/MenuButton.tsx";
import MobileSearchInput from "../../search panel/mobile search input/MobileSearchInput.tsx";
import MobileBackButton from "../mobile back button/MobileBackButton.tsx";

export default function MobileHeader({isSearchPanelOpen, setIsSearchPanelOpen, setSearchedUser}:{isSearchPanelOpen:boolean, setIsSearchPanelOpen: (isOpen:boolean) => void, setSearchedUser: (username:string) => void}) {
    return (
        <>
            <div className="mobileHeader">
                {isSearchPanelOpen ? (
                    <div className="mobileHeaderPart">
                        <MobileBackButton setIsSearchPanelOpen={setIsSearchPanelOpen}/>
                        <MobileSearchInput setSearchedUser={setSearchedUser}/>
                    </div>
                ) : (
                    <div className="mobileHeaderPart">
                        <MenuButton />
                        <SearchButton setIsSearchPanelOpen={setIsSearchPanelOpen} isSearchPanelOpen={isSearchPanelOpen}/>
                    </div>
                )}
            </div>
        </>
    )
}