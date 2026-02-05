import {createSlice} from '@reduxjs/toolkit';

const actualChatSlice = createSlice({
    name: 'actualChat',
    initialState: {
        actualChat: [],
    },
    reducers: {
        setActualChat(state, action) {
            state.actualChat = action.payload;
        },
    }
})

export const { setActualChat } = actualChatSlice.actions
export default actualChatSlice.reducer
