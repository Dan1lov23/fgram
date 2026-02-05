import {configureStore} from "@reduxjs/toolkit";

import actualChatSlice from "../slices/actual chat slice/actualChatSlice.ts";
import isOpenChatSlice from "../slices/is open chat slice/isOpenChatSlice.ts";
import chatsSlice from "../slices/chats slice/chatsSlice.ts";

export const store = configureStore({
    reducer: {
        actualChat: actualChatSlice,
        isOpenChat: isOpenChatSlice,
        chats: chatsSlice,
    }
})
