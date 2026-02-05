import "./messageMenu.css";

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import DeleteMessageButton from "../delete message button/DeleteMessageButton.tsx";
import CopyMessageButton from "../copy message button/CopyMessageButton.tsx";
import ChangeMessageButton from "../change message button/ChangeMessageButton.tsx";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

export default function MessageMenu({messageSender, messageText, messageId}:{messageSender:string, messageText:string, messageId:number}) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="messageMenu">
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
                            <DeleteMessageButton messageId={messageId}/>
                            <CopyMessageButton messageText={messageText}/>
                            <ChangeMessageButton messageId={messageId} messageText={messageText}/>
                        </div>
                    ) : (
                        <CopyMessageButton messageText={messageText}/>
                    )}
                </Typography>
            </Popover>
        </div>
    );
}
