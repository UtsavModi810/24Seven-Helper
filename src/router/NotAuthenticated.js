import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "./routes";
import Login from '../screen/Login';
import Register from '../screen/Register';
import Auth from '../router/auth'
import Board from '../screen/Boarding';
import ForgotPassword from '../screen/ForgotPassword';
import ResetPassword from '../screen/ResetPassword';


const Stack = createStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Routes.Board} component={Board} options={{headerShown:false}} />
            <Stack.Screen name={Routes.Login} component={Login} options={{headerShown:false}} />
            <Stack.Screen name={Routes.Register} component={Register} options={{headerShown:false}} />
            <Stack.Screen name={Routes.Auth} component={Auth} options={{headerShown:false}} />
            <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassword} options={{headerShown:false}} />
            <Stack.Screen name={Routes.ResetPassword} component={ResetPassword} options={{headerShown:false}} />
        </Stack.Navigator>
    );
}

export default NotAuthenticated;