import DesktopInterfaceUserProfileSettingCart from "../desktop interface settings carts/desktop interface user profile setting cart/DesktopInterfaceUserProfileSettingCart.tsx";
import DesktopInterfaceDeleteAccountSettingCart from "../desktop interface settings carts/desktop interface user profile delete account/DesktopInterfaceDeleteAccountSettingCart.tsx";

export default function DesktopInterfaceSettingsList({openSetting, setOpenSetting}:{openSetting:string, setOpenSetting: (openSetting: string) => void}) {

    return (
        <>
            <div className="desktopInterfaceSettingsList">
                <DesktopInterfaceUserProfileSettingCart openSetting={openSetting} setOpenSetting={setOpenSetting} />
                <DesktopInterfaceDeleteAccountSettingCart openSetting={openSetting} setOpenSetting={setOpenSetting} />
            </div>
        </>
    )

}
