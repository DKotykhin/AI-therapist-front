import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Chat = () => {
    return (
        <View style={styles.container}>
            <Text>Chat Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F0ED',
    },
});