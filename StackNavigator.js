import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import About from './About';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#384053',
    }, 
    headerTintColor: 'white',
}

const MainStackNavigator = ({navigaton}) => {
    return(
        <Stack.Navigaton screenOption={screenOptionStyle}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='About' component={About}/>
        </Stack.Navigaton>
    );
}

export default MainStackNavigator;