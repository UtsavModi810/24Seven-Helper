import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screen/Home";
import Routes from "./routes";
import {BottomTab} from '../component';
import Profile from '../screen/Profile';


const Stack = createStackNavigator();

// const Authenticated = createStackNavigator({
//     [Routes.Home]: {
//         screen: Home
//     }
// }, {
//     initialRouteName: Routes.Home,
//     defaultNavigationOptions: {
//         header: null
//     }
// });

const Authenticated = () => {
    return (
        <Stack.Navigator
            initialRouteName={Routes.Home}>
            <Stack.Screen name={Routes.Home} component={BottomTab} options={{headerShown:false}} />
            <Stack.Screen name={Routes.Profile} component={Profile} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default Authenticated;
