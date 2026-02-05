import "./mobileChangeMessageButton.css";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";

import {updateMessageFunction} from "../../../../../../API/messages API functions/messagesApiFunctions.ts";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--background-color)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MobileChangeMessageButton({messageText, messageId}:{messageText:string, messageId:number}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newMessage, setNewMessage] = useState(messageText);

    return (
        <div className="mobileChangeMessageButton">
            <button onClick={handleOpen}>
                <FontAwesomeIcon icon={faPencil}/>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p style={{textAlign: "center", fontSize: "35px"}}>Change message?</p>
                    <div style={{display: 'grid', justifyContent: 'center', justifyItems: "center", gridTemplateColumns: 'repeat(1, 1fr)'}}>
                        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
                            style={{
                                width: "300px"
                            }}
                        />
                        <button
                            onClick={() => updateMessageFunction(messageId, newMessage, handleClose)}
                            style={{
                                width: "200px",
                                height: "40px",
                                margin: "20px",
                                fontSize: "20px",
                                color: "var(--text-color)",
                                border: "1px solid var(--primary-color)",
                                borderRadius: "5px",
                                cursor: "pointer",
                                backgroundColor: "var(--primary-color)",
                            }}
                        >
                            Change
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
