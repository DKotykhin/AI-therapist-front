import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chatMessages: [],
};

const messageSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.chatMessages = [action.payload, ...state.chatMessages];
        },
    },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
