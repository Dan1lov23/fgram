import {createSlice} from '@reduxjs/toolkit';

const isOpenChatSlice = createSlice({
    name: 'isOpenChat',
    initialState: {
        isOpenChat: false,
    },
    reducers: {
        setIsOpenChat(state, action) {
            state.isOpenChat = action.payload;
        },
    }
})

export const { setIsOpenChat } = isOpenChatSlice.actions
export default isOpenChatSlice.reducer
