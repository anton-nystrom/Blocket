import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Create from './Create';
import CreateNextStep from './CreateNextStep';

const CreateStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Create" 
                component={Create}
                options={{title: "Skapa annons"}}
            />
            <Stack.Screen 
                name="CreateNextStep" 
                component={CreateNextStep}
                options={{title: "Skapa annons"}}
            />
        </Stack.Navigator>
    )
}

export default CreateStack