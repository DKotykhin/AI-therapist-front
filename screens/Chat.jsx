import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';

import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/messageSlice';

import { CloseWhiteSVG, SendSVG, WaitingSVG } from '../components/Svg-images';
import avatar from '../assets/avatar-little.png';
import { Loading } from '../components/Loading';

import { color } from '../constants/css';

export const Chat = ({ navigation }) => {
    const [chatLoading, setChatLoading] = useState(false);
    const [messageLoading, setMessageLoading] = useState(false);

    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.chatMessages);

    const socket = useRef();

    useEffect(() => {
        setChatLoading(true);
        socket.current = new WebSocket(process.env.WS_SERVER);

        socket.current.onopen = () => {
            console.log('Socket open');
            setChatLoading(false);
        };
        socket.current.onmessage = (event) => {
            // console.log(event.data);
            setMessageLoading(false);
            dispatch(
                addMessage({
                    _id: new Date(),
                    text: event.data,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'AI Therapist',
                        avatar,
                    },
                })
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
        // console.log(newMessages);
        setMessageLoading(true);
        socket.current.send(newMessages[0].text);
        dispatch(addMessage(newMessages[0]));
    };

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: color.purple,
                        paddingHorizontal: 4,
                        paddingVertical: 3,
                    },
                    left: {
                        backgroundColor: color.lightGrey,
                        paddingHorizontal: 4,
                        paddingVertical: 3,
                    },
                }}
            />
        );
    };

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View style={styles.renderSend}>
                    <SendSVG />
                </View>
            </Send>
        );
    };

    const TypingIndicator = () => {
        return (
            <View style={styles.typingIndicator}>
                <Image source={avatar} />
                <WaitingSVG />
            </View>
        );
    };

    const renderTime = () => {
        return null;
    };

    const onClose = () => {
        socket.current.close();
        navigation.navigate('Home');
    };

    if (chatLoading) return <Loading navigation={navigation} />;

    return (
        <View style={styles.container}>
            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.buttonPurple} onPress={onClose}>
                    <CloseWhiteSVG />
                </TouchableOpacity>
            </View>
            <GiftedChat
                messages={messages}
                onSend={(newMessages) => onSend(newMessages)}
                user={{
                    _id: 1,
                }}
                messagesContainerStyle={{
                    backgroundColor: color.lightGrey,
                }}
                renderBubble={renderBubble}
                renderSend={renderSend}
                // renderInputToolbar={renderInputToolbar}
                renderFooter={() => messageLoading && <TypingIndicator />}
                scrollToBottom
                renderTime={renderTime}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonBox: {
        position: 'absolute',
        top: 50,
        right: 16,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        zIndex: 3,
    },
    buttonPurple: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: color.purple,
    },
    renderSend: {
        marginBottom: 15,
        marginRight: 15,
    },
    typingIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginLeft: 12,
    },
});
