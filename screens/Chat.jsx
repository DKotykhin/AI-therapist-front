import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import Svg, { Circle, Path } from 'react-native-svg';

import avatar from '../assets/avatar-little.png';

import { Loading } from '../components/Loading';
import { color } from '../constants/css';

export const Chat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [chatLoading, setChatLoading] = useState(false);
    const [messageLoading, setMessageLoading] = useState(false);

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
            setMessages((prevMessages) =>
                GiftedChat.append(prevMessages, [
                    {
                        _id: new Date(),
                        text: event.data,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'AI Therapist',
                            avatar,
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
        // console.log(newMessages);
        setMessageLoading(true);
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
        socket.current.send(newMessages[0].text);
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
                }}
            />
        );
    };

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View style={styles.renderSend}>
                    <Svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='16'
                        viewBox='0 0 18 16'
                        fill='none'
                    >
                        <Path
                            d='M1.82614 7.17682L0.745822 4.04877C0.157409 2.34514 -0.136744 1.49343 0.0743917 0.96816C0.257674 0.512039 0.651559 0.165977 1.13789 0.0339067C1.69791 -0.118203 2.54352 0.249039 4.23496 0.98363L15.0951 5.70017C16.7491 6.41856 17.5762 6.7777 17.8324 7.27806C18.0551 7.71279 18.0559 8.22321 17.8347 8.65857C17.5801 9.15975 16.7543 9.52149 15.1026 10.245L4.23186 15.0068C2.5417 15.7472 1.69652 16.1174 1.13596 15.9669C0.649096 15.8362 0.254032 15.4911 0.0693569 15.0354C-0.143385 14.5105 0.14884 13.6574 0.733076 11.9511L1.82828 8.75284L9.99828 8.16444L9.99775 7.7647L1.82614 7.17682Z'
                            fill='#4A00E7'
                        />
                    </Svg>
                </View>
            </Send>
        );
    };

    const TypingIndicator = () => {
        return (
            <View style={styles.typingIndicator}>
                <Image source={avatar} />
                <Svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='7'
                    viewBox='0 0 20 7'
                    fill='none'
                >
                    <Circle cx='2' cy='5' r='2' fill='#1E2220' />
                    <Circle cx='10' cy='2' r='2' fill='#1E2220' fill-opacity='0.5' />
                    <Circle cx='18' cy='5' r='2' fill='#1E2220' fill-opacity='0.25' />
                </Svg>
            </View>
        );
    };

    const onClose = () => {
        socket.current.close();
        navigation.navigate('Home');
    };

    if (chatLoading) return <Loading />;

    return (
        <View style={styles.container}>
            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.buttonPurple} onPress={onClose}>
                    <Svg
                        width='14'
                        height='14'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <Path
                            d='M8.00028 6.2954L13.4431 0.852358C13.9138 0.381619 14.677 0.381618 15.1477 0.852356C15.6184 1.32307 15.6184 2.08622 15.1477 2.55694L9.70486 8.00005L15.1477 13.4431C15.6184 13.9138 15.6184 14.6769 15.1477 15.1476C14.677 15.6184 13.9138 15.6184 13.443 15.1476L8.00028 9.70469L2.5569 15.1477C2.08618 15.6184 1.323 15.6184 0.852302 15.1477C0.38159 14.677 0.381609 13.9138 0.852344 13.4431L6.2957 8.00005L0.852783 2.55693C0.382088 2.08622 0.382089 1.32307 0.852784 0.852354C1.3235 0.381617 2.08671 0.381617 2.55743 0.852354L8.00028 6.2954Z'
                            fill='#fff'
                        />
                    </Svg>
                </TouchableOpacity>
            </View>
            <GiftedChat
                messages={messages}
                onSend={(newMessages) => onSend(newMessages)}
                user={{
                    _id: 1,
                }}
                messagesContainerStyle={{
                    backgroundColor: color.white,
                }}
                renderBubble={renderBubble}
                renderSend={renderSend}
                // renderInputToolbar={renderInputToolbar}
                renderFooter={() => messageLoading && <TypingIndicator />}
                scrollToBottom                
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
        top: 16,
        right: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        zIndex: 3,
    },
    buttonPurple: {
        display: 'flex',
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginLeft: 12,
    },
});
