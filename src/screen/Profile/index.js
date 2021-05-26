import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { RoundButton } from '../../component';
import { Color } from '../../utils/Color';
import CommonStyle from '../../utils/CommonStyles';
import { CommonActions } from '@react-navigation/routers';
import Routes from '../../router/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Label } from '../../component';
import styles from './style';
import ThemeUtils from '../../utils/ThemeUtils';

class Profile extends Component {

    resetStack = CommonActions.reset({
        index: 0,
        routes: [{ name: Routes.Splash }],
    });
    removeAuthentication = async () => {
        try {
            console.log('logout');
            await AsyncStorage.clear();
            this.props.navigation.dispatch(this.resetStack);
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <ScrollView style={CommonStyle.container}>
                <View style={styles.subcontainer}>

                    <View style={styles.edit}>
                        <Image source={require('../../assets/images/userprofile.png')} 
                        style={{ marginTop:20,resizeMode:'cover', width: ThemeUtils.relativeWidth(31),height: ThemeUtils.relativeHeight(16)}} />
                        <View style={styles.text}>
                            <Label large color={Color.GREY}>Utsav Modi</Label>
                            <Label large color={Color.GREY}>utsav@gmail.com </Label>
                            <Label large color={Color.GREY}>9988776655</Label>
                        </View>
                    </View>

                    <View style={styles.menuWrapper}>
                        <View style={styles.menuItem}>
                            <Icon name="ios-person-circle-outline" color={Color.ORANGE} size={25} />
                            <Label style={styles.menuItemText}>User Profile</Label>

                        </View>

                        <View style={styles.menuItem}>
                            <Icon name="color-filter-outline" color={Color.ORANGE} size={25} />
                            <Label style={styles.menuItemText}>About HelpExpert</Label>

                        </View>

                        <View style={styles.menuItem}>
                            <Icon name="ios-arrow-redo-sharp" color={Color.ORANGE} size={25} />
                            <Label style={styles.menuItemText}>Share HelpExpert</Label>

                        </View>

                        <View style={styles.menuItem}>
                            <Icon name="share-outline" color={Color.ORANGE} size={25} />
                            <Label style={styles.menuItemText}>Tell Your Friends</Label>

                        </View>

                        <View style={styles.menuItem}>
                            <Icon name="ios-desktop-outline" color={Color.ORANGE} size={25} />
                            <Label style={styles.menuItemText}>Scheduled Booking</Label>

                        </View>

                        <View style={styles.menuItem}>
                            <Icon name="ios-star-outline" color={Color.ORANGE} size={25} />
                            <Label style={styles.menuItemText}>Rate 24Seven Helper</Label>

                        </View>

                        <View style={styles.menuItem}>
                            <Icon name="md-flower-outline" color={Color.ORANGE} size={25} />
                            <Label style={styles.menuItemText}>Help Desk</Label>

                        </View>

                        <RoundButton text='Logout' textColor={Color.WHITE} me={50} mt={20} ms={50} backgroundColor={Color.BUTTON_PRIMARY} btn_block border_radius={10} click={this.removeAuthentication} />
            

                    </View>
                </View>
            </ScrollView>

        );
    };
}

export default Profile




