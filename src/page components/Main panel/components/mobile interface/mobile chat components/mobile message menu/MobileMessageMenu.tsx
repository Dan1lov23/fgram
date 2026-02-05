import "./mobileMessageMenu.css";

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import MobileDeleteMessageButton from "../mobile delete message button/MobileDeleteMessageButton.tsx";
import MobileCopyMessageButton from "../mobile copy message button/MobileCopyMessageButton.tsx";
import MobileChangeMessageButton from "../mobile change message button/MobileChangeMessageButton.tsx";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

export default function MobileMessageMenu({messageSender, messageText, messageId}:{messageSender:string, messageText:string, messageId:number}) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="mobileMessageMenu">
            <p onClick={handleClick}>
                <FontAwesomeIcon icon={faCircleInfo}/>
            </p>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{p: 2}} style={{
                    background: "var(--background-color)",
                }}>
                    {messageSender === localStorage.getItem("username") ? (
                        <div style={{
                            background: "var(--background-color)",
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)"
                        }}>
                            <MobileDeleteMessageButton messageId={messageId}/>
                            <MobileCopyMessageButton messageText={messageText}/>
                            <MobileChangeMessageButton messageId={messageId} messageText={messageText}/>
                        </div>
                    ) : (
                        <MobileCopyMessageButton messageText={messageText}/>
                    )}
                </Typography>
            </Popover>
        </div>
    );
}
