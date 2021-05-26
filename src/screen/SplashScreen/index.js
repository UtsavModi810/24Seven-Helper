import React, { Component } from 'react'
import { Text, View, Image, StatusBar, SafeAreaView } from 'react-native'
import { StackActions, NavigationAction, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../router/routes';
import CommonStyles from '../../utils/CommonStyles';
import ThemeUtils from '../../utils/ThemeUtils';

class SplashScreen extends Component {

    resetToAuth = CommonActions.reset({
        index: 0,
        routes: [
            { name: Routes.Authenticated },
        ],
    });

    //navigate to authenticated route
    resetToNotAuth = CommonActions.reset({
        index: 0,
        routes: [
            { name: Routes.NotAuthenticated },
        ],
    });


    componentDidMount() {
        this.checkAuthentication();
    }

    checkAuthentication = async () => {
        let isAuthenticated = await AsyncStorage.getItem("user");
        if (isAuthenticated != null)
            this.goTo(true);
        else
            this.goTo(false)

    }

    goTo = (value) => {
        if (value) {
            setTimeout(() => {
                this.props.navigation.dispatch(this.resetToAuth);
            }, 2000);
        } else {
            setTimeout(() => {
                this.props.navigation.dispatch(this.resetToNotAuth);
                // this.resetToAuth;
            }, 2000);
        }
    }




    render() {

        const { navigation } = this.props

        return (
            <SafeAreaView style={CommonStyles.container}>
                <StatusBar hidden={true}/>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width:ThemeUtils.relativeWidth(60),height:ThemeUtils.relativeHeight(40) }} source={require('../../assets/images/logo.jpg')} />
                </View>
            </SafeAreaView>
        )
    }
}

export default SplashScreen
