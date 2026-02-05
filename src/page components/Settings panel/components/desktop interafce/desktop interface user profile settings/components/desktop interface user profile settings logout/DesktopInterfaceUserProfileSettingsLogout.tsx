import "./desktopInterfaceUserProfileSettingsLogout.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import {logoutFunction} from "../../../../../../../API/auth API functions/authApiFunctions.ts";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'var(--background-color)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function DesktopInterfaceUserProfileSettingsLogout() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="desktopInterfaceUserProfileSettingsLogout">
            <button onClick={handleOpen}>
                Logout
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p style={{textAlign: "center", fontSize: "30px"}}>Logout</p>
                    <div style={{display: 'grid', placeItems: 'center'}}>
                        <button
                            onClick={() => logoutFunction()}
                            style={{
                                width: "150px",
                                height: "40px",
                                margin: "20px",
                                fontSize: "20px",
                                color: "var(--text-color)",
                                border: "1px solid var(--primary-color)",
                                borderRadius: "5px",
                                cursor: "pointer",
                                backgroundColor: "var(--background-color)",
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
