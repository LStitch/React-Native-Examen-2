import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Cartscreen from '../screens/Cartscreen';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Cartelera"
                component={HomeScreen}
            />

            <Stack.Screen
                name="Carrito"
                component={Cartscreen}

                

            />

        </Stack.Navigator>
    )
}