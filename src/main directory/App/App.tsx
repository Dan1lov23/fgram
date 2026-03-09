import "./App.css";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../../page components/Login/page/Login.tsx";
import Register from "../../page components/Register/page/Register.tsx";
import MainPanel from "../../page components/Main panel/page/MainPanel.tsx";
import NoAuthError from "../../UI components/no auth error/NoAuthError.tsx";
import NoPageError from "../../UI components/no page error/NoPageError.tsx";
import SettingsPanel from "../../page components/Settings panel/page/SettingsPanel.tsx";
import ChangePassword from "../../page components/Change password/page/ChangePassword.tsx";
import ConfirmAccount from "../../page components/Confirm account/page/ConfirmAccount.tsx";

import { setChats } from "../../redux/slices/chats slice/chatsSlice.ts";
import { setActualChat } from "../../redux/slices/actual chat slice/actualChatSlice.ts";
import { getChatFunction } from "../../API/chats API functions/get chat function/getChatFunction.ts";
import { checkSessionFunction } from "../../API/auth API functions/check session function/checkSessionFunction.ts";
import { getAllChatsFunction } from "../../API/chats API functions/get all chats function/getAllChatsFunction.ts";

export default function App() {

    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);
    const [sessionCheckMarker, setSessionCheckMarker] = useState(false);

    useEffect(() => {
        checkSessionFunction(localStorage.getItem("username"), localStorage.getItem("token"), (result) => {
            setSessionCheckMarker(result);
            setChecked(true);
        });
        localStorage.setItem("actualChatStorage", "");
    }, [])

    useEffect(() => {
        const intervalId = setInterval(async () => {

            const messages = await getChatFunction(localStorage.getItem("username"), localStorage.getItem("companion"));

            const actualChatsStorageStored:any | null = localStorage.getItem("actualChatsStorageStored");
            const actualChatStorage = JSON.parse(actualChatsStorageStored);

            // console.log(actualChatStorage, messages);

            if (JSON.stringify(actualChatStorage) !== JSON.stringify(messages)) {
            
                dispatch(setActualChat(messages));

                localStorage.setItem("actualChatsStorageStored", JSON.stringify(messages));

            }

            const chats = await getAllChatsFunction(localStorage.getItem("username"));
            dispatch(setChats(chats));

        
        }, 500);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        async function firstGeneration() {
            const messages = await getChatFunction(localStorage.getItem("username"), localStorage.getItem("companion"));
            dispatch(setActualChat(messages));
        }
        firstGeneration();
    }, []);

    if (!checked) {
        return null;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/confirmAccount/:username"
                           element={
                                sessionCheckMarker ? (
                                    <ConfirmAccount/>
                                ) : (
                                    <NoAuthError />
                                )
                           } />
                    <Route path="/"
                        element={
                            sessionCheckMarker ? (
                                <MainPanel />
                            ) : (
                                <NoAuthError/>
                            )
                        }
                    />
                    <Route path="/settings"
                           element={sessionCheckMarker ? (
                               <SettingsPanel/>
                           ) : (
                               <NoAuthError/>
                           )}/>
                    <Route path="/changePassword"
                           element={sessionCheckMarker ? (
                               <ChangePassword/>
                           ) : (
                               <NoAuthError/>
                           )}/>
                    <Route path="/*" element={<NoPageError/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
