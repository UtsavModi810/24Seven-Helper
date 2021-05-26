import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationActions } from '@react-navigation/compat';

import SplashScreen from "../screen/SplashScreen";
import Authenticated from "./Authenticated"
import NotAuthenticated from "./NotAuthenticated";
import Routes from "./routes";


const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Routes.Splash}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={Routes.Splash} component={SplashScreen}/>
                <Stack.Screen name={Routes.NotAuthenticated} component={NotAuthenticated} />
                <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;

// navigate screen only one time on open of any register stack's screen
// const navigateOnce = (getStateForAction) => (action, state) => {
//     const { type, routeName } = action;
//     return (
//         state &&
//         type === NavigationActions.NAVIGATE &&
//         routeName === state.routes[state.routes.length - 1].routeName
//     ) ? null : getStateForAction(action, state);
// };

// NotAuthenticated.router.getStateForAction = navigateOnce(NotAuthenticated.router.getStateForAction);
// Authenticated.router.getStateForAction = navigateOnce(Authenticated.router.getStateForAction);


