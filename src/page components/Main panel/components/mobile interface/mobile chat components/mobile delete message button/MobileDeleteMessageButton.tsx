import "./mobileDeletesMessageButton.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import {deleteMessageFunction} from "../../../../../../API/messages API functions/delete message function/deleteMessageFunction.ts";

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

export default function MobileDeleteMessageButton({messageId}:{messageId:number}) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="mobileDeleteMessageButton">
            <button onClick={handleOpen}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p style={{textAlign: "center", fontSize: "30px"}}>Delete message?</p>
                    <div style={{display: 'grid', justifyContent: 'center', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                        <button
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
                            Cancel
                        </button>
                        <button
                            onClick={() => deleteMessageFunction(localStorage.getItem("username"), messageId, handleClose)}
                            style={{
                                width: "150px",
                                height: "40px",
                                margin: "20px",
                                fontSize: "20px",
                                color: "var(--text-color)",
                                border: "1px solid var(--primary-color)",
                                borderRadius: "5px",
                                cursor: "pointer",
                                backgroundColor: "var(--primary-color)",
                            }}
                        >Delete</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
