import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { color } from '../constants/css';

export const Loading = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' />
            <Text style={styles.loadingText}>Loading...</Text>
            <Text style={styles.returnText} onPress={() => navigation.navigate('Home')}>
                Return to
                <Text style={styles.textGreen}> Home page</Text>
            </Text>
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
    },
    textGreen: {
        color: color.lightGreen,
    },
});
