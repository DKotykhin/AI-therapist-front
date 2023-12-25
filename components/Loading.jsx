import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

import { color } from '../constants/css';

export const Loading = ({ navigation }) => {
    const [showReturn, setShowReturn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowReturn(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' />
            <Text style={styles.loadingText}>Loading...</Text>
            {showReturn ? (
                <Text style={styles.returnText} onPress={() => navigation.navigate('Home')}>
                    Return to
                    <Text style={styles.textGreen}> Home page</Text>
                </Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
    },
    returnText: {
        marginTop: 50,
        fontSize: 18,
    },
    textGreen: {
        color: color.lightGreen,
        fontWeight: '700',
    },
});
