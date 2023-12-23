import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../store/messageSlice';

const store = configureStore({
    reducer: {
        chat: chatReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['addMessage'],
                ignoredActionPaths: ['payload'],
                ignoredPaths: ['chat.chatMessages'],
            },
        }),
});

export default store;
