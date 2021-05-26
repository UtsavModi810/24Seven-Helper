import React, { Component } from 'react'
import { Text, View,Image, KeyboardAvoidingView } from 'react-native'
import styles from './style';
import CommonStyle from '../../utils/CommonStyles';
import {Label} from '../../component';
import {Color} from '../../utils/Color';
import { validation ,PasswordValidate} from '../../utils/ValidationUtils';
import {RoundButton} from '../../component';
import {FloatingInputText} from '../../component/';
import Routes from '../../router/routes';
import {PasswordInputText} from '../../component';
import ThemeUtils from '../../utils/ThemeUtils';



class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            otpError: '',
            password: '',
            PasswordError: '',
            confirmpassword: '',
            confirmpasswordError: '',
            toggleIcon: 'ios-eye-outline',
            isSecurePassword: true,
            toggleIcons: 'ios-eye-outline',
            isSecureConfirmPassword:true,
           
        }
    }
    check_validate = () => {
        let otpError,
        passwordError,
        confirmpasswordError,
        isValid;

        otpError = validation('otp', this.state.otp);
        passwordError = validation('password', this.state.password);
        confirmpasswordError = PasswordValidate(this.state.password, this.state.confirmpassword)

        if (otpError != null || passwordError != null || confirmpasswordError != null){    
        this.setState({
            otpError: otpError,
            passwordError: passwordError,
            confirmpasswordError: confirmpasswordError,
    
        });
        isValid = false;
    }
        else {
            this.setState({
                otpError: '',
                passwordError: '',
                confirmpasswordError: '',
                });
                isValid = true;
            }
        if (isValid) {
            let obj = {
              otp: this.state.otp,
              password: this.state.password,
            };
            this.props.navigation.navigate(Routes.Login);
        }
    }

    handleToggle = () => {
        this.state.isSecurePassword
          ? this.setState({isSecurePassword: false, toggleIcon: 'ios-eye-off-outline'})
          : this.setState({isSecurePassword: true, toggleIcon: 'ios-eye-outline'});
      };
    
      handleToggles = () => {
        this.state.isSecureConfirmPassword
          ? this.setState({isSecureConfirmPassword: false, toggleIcons: 'ios-eye-off-outline'})
          : this.setState({isSecureConfirmPassword: true, toggleIcons: 'ios-eye-outline'});
      };



    render() {
        return (
            <View style={CommonStyle.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/images/Sunrise.jpg')} style={{ resizeMode:'stretch',height:ThemeUtils.relativeHeight(30)}} />
                </View>
                <Image source={require('../../assets/images/logo.jpg')} style={styles.img} />
                <View style={styles.content}>
                    <View style={styles.text}>
                        <Label normal bolder color={Color.BLACK} mb={20} mt={20} style={styles.text2}>Reset Password</Label>
                    </View>
                    <View style={styles.content1}>
                    <KeyboardAvoidingView
                            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
                            enabled={Platform.OS === 'ios' ? true : false}>
                    <FloatingInputText name="ios-shield-checkmark-outline" text="Otp" placeholder="Enter OTP" 
                        onChangeText={text => this.setState({ otp: text })}
                        value={this.state.otp}
                        error={this.state.otpError} />
                        <Label align="left" ms={43} color={Color.RED}>{this.state.otpError}</Label>

                    <PasswordInputText text="New Password" iconName={this.state.toggleIcon}   placeholder="Enter Password" 
                         onToggle={()=>this.handleToggle()}
                        visible={this.state.isSecurePassword}
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password}
                    error={this.state.passwordError} />
                    <Label align="left" ms={43} color={Color.RED}>{this.state.passwordError}</Label>

                    <PasswordInputText text="Confirm Passoword" iconName={this.state.toggleIcons}  placeholder="Enter Password" 
                        onToggle={()=>this.handleToggles()}
                    
                        visible={this.state.isSecureConfirmPassword}
                    onChangeText={text => this.setState({ confirmpassword: text })}
                    error={this.state.confirmpasswordError} />
                    <Label align="left" ms={43} color={Color.RED}>{this.state.confirmpasswordError}</Label>


                    <RoundButton text='Submit' textColor={Color.WHITE} me={30} ms={30} backgroundColor={Color.BUTTON_PRIMARY} btn_xl border_radius={10} click={this.check_validate} />
                    </KeyboardAvoidingView>
                    </View>
                </View>
            </View>
        )
    }
}

export default ResetPassword;
