import MobileInterfaceUserProfileSettingCart from "../mobile interface profile setting carts/mobile intefface user profile setting cart/MobileInterfaceUserProfileSettingCart.tsx";
import MobileInterfaceDeleteAccountSettingCart from "../mobile interface profile setting carts/mobile interface user profile delete account/MobileInterfaceDeleteAccountSettingCart.tsx";

export default function MobileInterfaceSettingsList({setOpenSetting}:{setOpenSetting: (openSetting: string) => void}) {
    return (
        <>
            <div className="MobileInterfaceSettingsList">
                <MobileInterfaceUserProfileSettingCart setOpenSetting={setOpenSetting} />
                <MobileInterfaceDeleteAccountSettingCart setOpenSetting={setOpenSetting} />
            </div>
        </>
    )
}