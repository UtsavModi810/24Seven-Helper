import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import { validation } from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import { Color } from '../../utils/Color';
import CommonStyle from '../../utils/CommonStyles';
import { Label } from '../../component';
import { RoundButton } from '../../component';
import { FloatingInputText } from '../../component';
import { PasswordInputText } from '../../component';
import ThemeUtils from '../../utils/ThemeUtils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            PasswordError: '',
            toggleIcon: 'ios-eye-outline',
            isSecurePassword: true,

        }
    }

    Checked_blank = () => {
        let emailError,
            passwordError,
            isValid;

        emailError = validation('email', this.state.email)
        passwordError = validation('password', this.state.password)

        if (emailError != null || passwordError != null) {
            this.setState({
                emailError: emailError,
                passwordError: passwordError,
            });
            isValid = false
        }
        else {
            this.setState({
                emailError: "",
                passwordError: "",
            })
            isValid = true
        }
        if (isValid) {
            let obj = {
                email: this.state.email,
                password: this.state.password,
            }
            this.props.navigation.navigate(Routes.Auth, { email: this.state.email, password: this.state.password })
        };

    }
    making_api_call = () => {
        if (this.Checked_blank()) {
            this.props.navigation.navigate(Routes.Home)
        }
    }


    handleToggle = () => {
        this.state.isSecurePassword
            ? this.setState({ isSecurePassword: false, toggleIcon: 'ios-eye-off-outline' })
            : this.setState({ isSecurePassword: true, toggleIcon: 'ios-eye-outline' });
    };




    render() {
        return (
            <View style={CommonStyle.container}>
                <ScrollView>
                    <StatusBar hidden={true} />
                    <View style={styles.header}>
                        <Image source={require('../../assets/images/Sunrise.jpg')} style={{ resizeMode: 'stretch', height: ThemeUtils.relativeHeight(30) }} />
                    </View>
                    <Image source={require('../../assets/images/logo.jpg')} style={styles.img} />



                    <View style={styles.content}>

                        <View style={styles.text}>
                            <Label normal bolder color={Color.BLACK} style={styles.text2}>Login</Label>

                            <Label normal bolder color={Color.GREY}>Register as Vendor</Label>
                        </View>
                        <View style={styles.content1}>
                            <KeyboardAwareScrollView
                                style={{ flex: 1 }}
                                resetScrollToCoords={{ x: 0, y: 0 }}
                                scrollEnabled={true}
                                enableResetScrollToCoords={false}
                                keyboardVerticalOffset={0}
                                enableOnAndroid={true}
                                keyboardShouldPersistTaps="always">
                                <FloatingInputText name="at-circle-outline" text="Email" placeholder="Enter Email"
                                    onChangeText={text => this.setState({ email: text })}
                                    value={this.state.email}
                                    error={this.state.emailError} />
                                <Label align="left" ms={43} color={Color.RED}>{this.state.emailError}</Label>


                                <PasswordInputText text="Password" iconName={this.state.toggleIcon} placeholder="Enter Password"
                                    onToggle={() => this.handleToggle()}

                                    visible={this.state.isSecurePassword}
                                    onChangeText={text => this.setState({ password: text })}
                                    value={this.state.password}
                                    error={this.state.passwordError} />
                                <Label align="left" ms={43} color={Color.RED}>{this.state.passwordError}</Label>


                                <Label color={Color.GREY} normal mt={10} mb={10} me={8} style={styles.text3}
                                    onPress={() => this.props.navigation.navigate(Routes.ForgotPassword)}>Forgot Password?</Label>

                                <RoundButton text='Sign In' textColor={Color.WHITE} mt={10} mb={15} me={30} ms={30}
                                    backgroundColor={Color.BUTTON_PRIMARY} btn_xl border_radius={10} click={this.making_api_call} />

                                <Label normal color={Color.GREY} mb={20} mt={10} align="center"
                                    onPress={() => this.props.navigation.navigate(Routes.Register)}>Don't have an account?{' '}{' '}
                                    <Label normal color={Color.BLUE}>{' '}Sign Up</Label></Label>

                            </KeyboardAwareScrollView>
                        </View>

                        <View style={styles.img1}>

                            <View style={{ backgroundColor: Color.WHITE, elevation: 10,
                             shadowColor:Color.ORANGE,
                             shadowOffset: {
                                 width: 0,
                                 height: 12,
                             },
                             shadowOpacity: 0.58,
                             shadowRadius: 16.00,
                            }}>
                                <Image style={{width: ThemeUtils.relativeWidth(15), height: ThemeUtils.relativeHeight(7),}} 
                                    source={require('../../assets/images/google.png')} />
                            </View>

                            <View style={{ backgroundColor: Color.WHITE, elevation: 10,
                            shadowColor:Color.ORANGE,
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            }}>
                                <Image style={{width: ThemeUtils.relativeWidth(15), height: ThemeUtils.relativeHeight(7),}}
                                    source={require('../../assets/images/facebook.png')} />
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }


};

export default Login
