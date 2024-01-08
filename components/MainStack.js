import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import ViewListing from './ViewListing';

const MainStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ViewListing"
                component={ViewListing}
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    )
}

export default MainStack