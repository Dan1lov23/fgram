import "./mobileInterfaceProfileSettingHeaderMenuButton.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";

import MobileMenuButtonLinkToMainPanel from "../../../../../../../UI components/mobile menu button components/mobile menu button link to main panel/MobileMenuButtonLinkToMainPanel.tsx";
import MobileMenuButtonLinToSettings from "../../../../../../../UI components/mobile menu button components/mobile menu button link to settings/MobileMenuButtonLinToSettings.tsx";

export default function MobileInterfaceProfileSettingHeaderMenuButton() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250, height: '100vh', backgroundColor: "var(--background-color)" }} role="presentation" onClick={toggleDrawer(false)}>
            <MobileMenuButtonLinkToMainPanel/>
            <MobileMenuButtonLinToSettings/>
        </Box>
    );

    return (
        <div className="mobileInterfaceProfileSettingHeaderMenuButton">
            <p onClick={toggleDrawer(true)}>
                <FontAwesomeIcon icon={faList}/>
            </p>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
