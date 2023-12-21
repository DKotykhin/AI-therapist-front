import React, { useState, useEffect, useRef } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const socket = useRef();

    useEffect(() => {
        socket.current = new WebSocket(process.env.WS_SERVER);

        socket.current.onopen = () => {
            console.log('Socket open');
        };
        socket.current.onmessage = (event) => {
            // console.log(event.data);
            setMessages((prevMessages) =>
                GiftedChat.append(prevMessages, [
                    {
                        _id: new Date(),
                        text: event.data,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'AI Therapist',
                            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/934.jpg',
                        },
                    },
                ])
            );
        };
        socket.current.onclose = () => {
            console.log('Socket closed');
        };
        socket.current.onerror = (err) => {
            console.log('Socket error', err);
        };
    }, []);

    const onSend = (newMessages = []) => {
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
        // console.log(newMessages);
        socket.current.send(newMessages[0].text);
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={(newMessages) => onSend(newMessages)}
            user={{
                _id: 1,
            }}
            messagesContainerStyle={{
                backgroundColor: '#fff',
            }}
        />
    );
};
