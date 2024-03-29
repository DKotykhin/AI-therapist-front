import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import logo from '../assets/Avatar.png';
import { color } from '../constants/css';

import { Fraunces_600SemiBold } from '@expo-google-fonts/fraunces';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';

export const Home = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        Fraunces_600SemiBold,
        Roboto_500Medium,
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ready for a Chat?</Text>
            <Text style={styles.subtitle}>Yuna Awaits.</Text>
            <Image source={logo} style={styles.image} />
            <Text style={styles.terms}>
                By clicking Start conversation you agree to our
                <Text style={styles.termsGreen}> Terms & Service</Text>
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Start')}>
                <Text style={styles.buttonText}>start session</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.lightGrey,
        borderRadius: 44,
    },
    title: {
        color: color.black,
        textAlign: 'center',
        fontSize: 32,
        fontStyle: 'normal',
        lineHeight: 40,
        fontFamily: 'Fraunces_600SemiBold',
        marginTop: 153,
    },
    subtitle: {
        color: color.lightGreen,
        textAlign: 'center',
        fontSize: 32,
        fontStyle: 'normal',
        lineHeight: 40,
        fontFamily: 'Fraunces_600SemiBold',
    },
    image: {
        height: 370,
        width: 370,
        marginBottom: 60,
        flexGrow: 1,
    },
    terms: {
        color: color.black,
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'normal',
        lineHeight: 22,
        maxWidth: 222,
        fontFamily: 'Roboto_500Medium',
    },
    termsGreen: {
        color: color.lightGreen,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 22,
        fontFamily: 'Roboto_500Medium',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 56,
        paddingVertical: 22,
        borderRadius: 40,
        backgroundColor: color.darkGreen,
        marginTop: 24,
        marginBottom: 49,
    },
    buttonText: {
        color: color.white,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
});
