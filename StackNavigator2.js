import React from "react";
import {createStackNavigator2} from '@react-navigaton/stack';
import Home from './screens/Home.js';
import About from './screens/About.js';

const Stack = createStackNavigator2();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#FF6247',
    }, 
    headerTintColor: 'white',
}

const MainStackNavigator = ({navigaton}) => {
    return(
        <Stack.Navigator screenOption={screenOptionStyle}>
            <Stack.Screen name='Home' component={Home}> </Stack.Screen >
        </Stack.Navigator>
    );
}

const AboutStackNavigator = ({navigaton}) => {
    return(
        <Stack.Navigator screenOption={screenOptionStyle}>
            <Stack.Screen name='About' component={About}> </Stack.Screen >
        </Stack.Navigator>
    )
}

export {MainStackNavigator, AboutStackNavigator};