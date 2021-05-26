import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from '../../../router/routes';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Home from '../../../screen/Home';
import {Color} from '../../../utils/Color';
import Profile from '../../../screen/Profile';

const Tab = createBottomTabNavigator();


class BottomTab extends Component{
    render(){
        return(
            <Tab.Navigator initialRouteName={Routes.Home}
            tabBarOptions={{
                labelStyle: {fontSize: 12,},
                activeTintColor: '#03506f',
                style:{height:50}
            }}>
                <Tab.Screen name={Routes.Home}
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="ios-home-outline" color={Color.ORANGE} size={25} />
                    ),
                }}/>

                <Tab.Screen name={Routes.Profile}
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="ios-person-outline" color={Color.ORANGE} size={25} />
                    ),
                }}/>
            
            </Tab.Navigator>
        )
    }
}
export default BottomTab;