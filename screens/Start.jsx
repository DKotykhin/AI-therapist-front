import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import logo from '../assets/Avatar.png';
import Svg, { Path } from 'react-native-svg';

import { Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import { color } from '../constants/css';

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
                        <Svg
                            width='18'
                            height='22'
                            viewBox='0 0 18 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <Path
                                d='M4.70674 4.34403C4.70674 3.57457 4.88316 2.81536 5.22245 2.12475C5.92104 0.856891 7.25881 0 8.79535 0C8.86398 0 8.93221 0.00170946 9.00001 0.00508833C9.0678 0.00170946 9.13603 0 9.20466 0C10.7412 0 12.079 0.856891 12.7776 2.12475C13.1169 2.81536 13.2933 3.57457 13.2933 4.34403V9.87632C13.2933 12.1638 11.4638 14.0161 9.20466 14.0161C9.13603 14.0161 9.0678 14.0144 9.00001 14.011C8.93221 14.0144 8.86398 14.0161 8.79535 14.0161C6.5362 14.0161 4.70674 12.1638 4.70674 9.87632V4.34403Z'
                                fill='white'
                            />
                            <Path
                                d='M6.85542 22H11.1446C11.6428 22 12.044 21.5927 12.044 21.0869C12.044 20.5811 11.6428 20.1738 11.1446 20.1738H10.1041V17.6002C14.1426 17.1839 17.2949 13.9971 17.2949 10.1389C17.2949 9.63311 16.8937 9.22581 16.3955 9.22581C15.8973 9.22581 15.4961 9.63311 15.4961 10.1389C15.4961 13.272 12.6745 15.8188 9.2047 15.8188C9.13621 15.8188 9.06797 15.8178 9.00001 15.8158C8.93204 15.8178 8.86381 15.8188 8.79532 15.8188C5.32555 15.8188 2.50389 13.272 2.50389 10.1389C2.50389 9.63311 2.10268 9.22581 1.60448 9.22581C1.10629 9.22581 0.705078 9.63311 0.705078 10.1389C0.705078 13.9971 3.85741 17.1839 7.89592 17.6002V20.1738H6.85542C6.35723 20.1738 5.95602 20.5811 5.95602 21.0869C5.95602 21.5927 6.35723 22 6.85542 22Z'
                                fill='white'
                            />
                        </Svg>
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>start session</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={styles.buttonWhite}
                        onPress={() => navigation.navigate('Chat')}
                    >
                        <Svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                        >
                            <Path
                                d='M22.1955 18.0438C21.6897 18.0438 21.2535 17.9047 20.8868 17.6265C20.5328 17.3483 20.3558 16.9247 20.3558 16.3558C20.1408 16.9627 19.7678 17.4242 19.2367 17.7403C18.7183 18.0564 18.1367 18.2398 17.4918 18.2903C17.0493 18.3156 16.6004 18.2777 16.1452 18.1765C15.7027 18.088 15.298 17.9363 14.9314 17.7213C14.5647 17.4937 14.2612 17.2092 14.021 16.8679C13.7934 16.5138 13.6669 16.1029 13.6416 15.635C13.6164 14.9649 13.7238 14.4275 13.9641 14.0229C14.2043 13.6183 14.5204 13.3085 14.9124 13.0935C15.3044 12.8659 15.7469 12.7142 16.24 12.6383C16.7332 12.5625 17.2137 12.5245 17.6815 12.5245H20.3558V11.5004C20.3558 11.0578 20.1345 10.7354 19.6919 10.5331C19.2494 10.3308 18.712 10.2296 18.0798 10.2296C17.4855 10.217 16.9797 10.3244 16.5625 10.552C16.4541 10.6111 16.3598 10.6779 16.2796 10.7524C15.9072 11.098 15.5247 11.5762 15.0167 11.5762C14.5087 11.5762 14.0715 11.1538 14.2205 10.6681C14.2711 10.5028 14.3374 10.3503 14.4193 10.2106C14.6342 9.83131 14.925 9.52785 15.2917 9.30025C15.6584 9.07266 16.082 8.90828 16.5625 8.80713C17.043 8.70597 17.5487 8.6554 18.0798 8.6554C18.8258 8.6554 19.4707 8.73126 20.0144 8.88299C20.5581 9.03472 21.0006 9.23703 21.342 9.48992C21.696 9.73016 21.9553 10.0147 22.1196 10.3434C22.284 10.6722 22.3662 11.0072 22.3662 11.3486V15.9385C22.3662 16.1282 22.4168 16.2862 22.5179 16.4127C22.6191 16.5265 22.7645 16.5834 22.9542 16.5834C23.0484 16.5834 23.1248 16.6598 23.1248 16.7541V17.3136C23.1248 17.7168 22.7979 18.0438 22.3946 18.0438H22.1955ZM15.6142 15.2367C15.5889 15.5023 15.6205 15.7362 15.709 15.9385C15.8101 16.1408 15.9492 16.3115 16.1262 16.4506C16.3033 16.577 16.5119 16.6719 16.7521 16.7351C17.005 16.7983 17.2642 16.8299 17.5298 16.8299C17.8079 16.8299 18.0924 16.7983 18.3832 16.7351C18.6741 16.6592 18.9459 16.5454 19.1988 16.3937C19.4643 16.242 19.6983 16.0523 19.9006 15.8247C20.0361 15.6722 20.1461 15.5056 20.2305 15.3248C20.314 15.146 20.3368 14.9468 20.3368 14.7495V13.7384H17.7763C17.574 13.7384 17.3527 13.7574 17.1125 13.7953C16.8723 13.8206 16.6447 13.8838 16.4297 13.985C16.2274 14.0861 16.0441 14.2378 15.8797 14.4402C15.7279 14.6298 15.6394 14.8953 15.6142 15.2367Z'
                                fill='#1E2220'
                            />
                            <Path
                                d='M9.5889 15.4142C9.52284 15.2068 9.33017 15.0659 9.11248 15.0659H4.476C4.25831 15.0659 4.06563 15.2068 3.99958 15.4142L3.384 17.3471C3.25188 17.762 2.86654 18.0437 2.43115 18.0437H2.39435C1.7098 18.0437 1.22763 17.3714 1.44717 16.723L4.84778 6.6793C4.98526 6.27325 5.36626 6 5.79496 6H8.0114C8.4448 6 8.82886 6.27918 8.9626 6.69142L12.2209 16.7351C12.4304 17.3811 11.9488 18.0437 11.2697 18.0437H11.1573C10.7219 18.0437 10.3366 17.762 10.2045 17.3471L9.5889 15.4142ZM9.09866 13.7952L6.8132 7.11902L4.50879 13.7952H9.09866Z'
                                fill='#1E2220'
                            />
                        </Svg>
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>text chat</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        style={styles.buttonWhite}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <Path
                                d='M8.00028 6.2954L13.4431 0.852358C13.9138 0.381619 14.677 0.381618 15.1477 0.852356C15.6184 1.32307 15.6184 2.08622 15.1477 2.55694L9.70486 8.00005L15.1477 13.4431C15.6184 13.9138 15.6184 14.6769 15.1477 15.1476C14.677 15.6184 13.9138 15.6184 13.443 15.1476L8.00028 9.70469L2.5569 15.1477C2.08618 15.6184 1.323 15.6184 0.852302 15.1477C0.38159 14.677 0.381609 13.9138 0.852344 13.4431L6.2957 8.00005L0.852783 2.55693C0.382088 2.08622 0.382089 1.32307 0.852784 0.852354C1.3235 0.381617 2.08671 0.381617 2.55743 0.852354L8.00028 6.2954Z'
                                fill='#1E2220'
                            />
                        </Svg>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.lightGrey,
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
        height: 400,
        flexGrow: 1,
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        marginBottom: 50,
    },
    buttonBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
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
