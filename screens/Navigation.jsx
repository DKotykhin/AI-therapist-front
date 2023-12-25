import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from '../store/store';

import { Home } from './Home';
import { Start } from './Start';
import { Chat } from './Chat';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name='Start' component={Start} options={{ headerShown: false }} />
                    <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};
