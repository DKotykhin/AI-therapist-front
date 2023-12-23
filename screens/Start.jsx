import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import { Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';

import logo from '../assets/Avatar.png';
import { color } from '../constants/css';
import { AaTextSVG, CloseSVG, MikeSVG } from '../components/Svg-images';

export const Start = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        Roboto_500Medium,
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Yuna: Personal AI Growth Companion</Text>
            <Image source={logo} style={styles.image} />
            <View style={styles.buttonWrapper}>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={styles.buttonGreen}
                        onPress={() => Alert.alert('Warning:', 'Under development...')}
                    >
                        <MikeSVG />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>start session</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={styles.buttonWhite}
                        onPress={() => navigation.navigate('Chat')}
                    >
                        <AaTextSVG />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>text chat</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={styles.buttonWhite}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <CloseSVG />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>close</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 44,
        background:
            'linear-gradient(0deg, rgba(13, 65, 41, 0.00) 0%, rgba(13, 65, 41, 0.00) 100%), #EFECE8',
    },
    subtitle: {
        color: 'rgba(30, 34, 32, 0.70)',
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 500,
        fontFamily: 'Roboto_500Medium',
        marginTop: 10,
    },
    image: {
        height: 370,
        width: 370,
        // flexGrow: 1,
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginBottom: 50,
    },
    buttonBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        width: 96,
    },
    buttonGreen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        width: 64,
        height: 64,
        borderRadius: 40,
        backgroundColor: color.darkGreen,
    },
    buttonWhite: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        width: 64,
        height: 64,
        borderRadius: 40,
        backgroundColor: color.white,
    },
    buttonText: {
        color: 'rgba(30, 34, 32, 0.50)',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 600,
        textTransform: 'uppercase',
    },
});
