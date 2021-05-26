import React, { Component } from 'react';
import { ScrollView, View, Text, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validation, PasswordValidate } from '../../utils/ValidationUtils';
import Routes from '../../router/routes';
import { Color } from '../../utils/Color';
import CommonStyle from '../../utils/CommonStyles';
import { Label } from '../../component';
import { RoundButton } from '../../component';
import { FloatingInputText } from '../../component';
import { PasswordInputText } from '../../component';
import ThemeUtils from '../../utils/ThemeUtils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      usernameError: '',
      lastname: '',
      lastnameError: '',
      email: '',
      emailError: '',
      phoneNo: '',
      phoneError: '',
      password: '',
      PasswordError: '',
      confirmpassword: '',
      confirmpasswordError: '',
      toggleIcon: 'ios-eye-outline',
      isSecurePassword: true,
      toggleIcons: 'ios-eye-outline',
      isSecureConfirmPassword: true,
    }
  }

  check_validate = () => {
    let usernameError,
      lastnameError,
      emailError,
      phoneError,
      passwordError,
      confirmpasswordError,
      isValid;

    usernameError = validation('name', this.state.username);
    lastnameError = validation('name', this.state.lastname);
    emailError = validation('email', this.state.email);
    phoneError = validation('phoneNo', this.state.phoneNo);
    passwordError = validation('password', this.state.password);
    confirmpasswordError = PasswordValidate(this.state.password, this.state.confirmpassword)


    if (usernameError != null || lastnameError != null || emailError != null || phoneError != null || passwordError != null || confirmpasswordError != null) {
      this.setState({
        usernameError: usernameError,
        lastnameError: lastnameError,
        emailError: emailError,
        phoneError: phoneError,
        passwordError: passwordError,
        confirmpasswordError: confirmpasswordError,

      });
      isValid = false;

    }
    else {
      this.setState({
        usernameError: '',
        lastnameError: '',
        emailError: '',
        phoneError: '',
        passwordError: '',
        confirmpasswordError: '',
        toggleIcon: 'ios-eye-outline',
        isSecurePassword: true,
        toggleIcons: 'ios-eye-outline',
        isSecureConfirmPassword: true,


      });
      isValid = true;
    }
    if (isValid) {
      let obj = {
        username: this.state.username,
        lastname: this.state.lastname,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
      };
      AsyncStorage.setItem('user', JSON.stringify(obj));
      console.log(obj);
      this.props.navigation.navigate(Routes.Login);

    }

  }

  handleToggle = () => {
    this.state.isSecurePassword
      ? this.setState({ isSecurePassword: false, toggleIcon: 'ios-eye-off-outline' })
      : this.setState({ isSecurePassword: true, toggleIcon: 'ios-eye-outline' });
  };

  handleToggles = () => {
    this.state.isSecureConfirmPassword
      ? this.setState({ isSecureConfirmPassword: false, toggleIcons: 'ios-eye-off-outline' })
      : this.setState({ isSecureConfirmPassword: true, toggleIcons: 'ios-eye-outline' });
  };



  render() {
    return (
      <ScrollView style={CommonStyle.container}>
        <View></View>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Image source={require('../../assets/images/Sunrise.jpg')} style={{ resizeMode: 'stretch', height: ThemeUtils.relativeHeight(30) }} />
        </View>
        <Image source={require('../../assets/images/logo.jpg')} style={styles.img} />


        <View style={styles.content}>


          <View style={styles.text}>
            <Label normal bolder color={Color.BLACK} mb={20} mt={20} style={styles.text2}>Customer Registration</Label>
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

              <FloatingInputText name="ios-person-outline" text="First Name" placeholder="Enter First Name"
                onChangeText={text => this.setState({ username: text })} value={this.state.username}
                error={this.state.usernameError} />
              <Label align="left" ms={43} color={Color.RED}>{this.state.usernameError}</Label>



              <FloatingInputText name="ios-person-outline" text="Last Name" placeholder="Enter Last Name"
                onChangeText={text => this.setState({ lastname: text })} value={this.state.lastname}
                error={this.state.lastnameError} />
              <Label align="left" ms={43} color={Color.RED}>{this.state.lastnameError}</Label>


              <FloatingInputText name="at-circle-outline" text="Email" placeholder="Enter Email"
                onChangeText={text => this.setState({ email: text })}
                value={this.state.email}
                error={this.state.emailError} />
              <Label align="left" ms={43} color={Color.RED}>{this.state.emailError}</Label>



              <FloatingInputText name="ios-call-outline" keyboardType='numeric' text="Contact No" placeholder="Enter Contact No"
                onChangeText={text => this.setState({ phoneNo: text })}
                value={this.state.phoneNo}
                error={this.state.phoneError} />
              <Label align="left" ms={43} color={Color.RED}>{this.state.phoneError}</Label>





              <PasswordInputText iconName={this.state.toggleIcon} text="Password" placeholder="Enter Password"
                visible={this.state.isSecurePassword}
                onToggle={() => this.handleToggle()}
                onChangeText={text => this.setState({ password: text })}
                value={this.state.password}
                error={this.state.passwordError} />
              <Label align="left" ms={43} color={Color.RED}>{this.state.passwordError}</Label>



              <PasswordInputText iconName={this.state.toggleIcons} text="Confirm Passoword"
                placeholder="Confirm Password" visible={this.state.isSecureConfirmPassword}
                onToggle={() => this.handleToggles()}
                value={this.state.confirmpassword}
                onChangeText={text => this.setState({ confirmpassword: text })}
                error={this.state.confirmpasswordError} />
              <Label align="left" ms={43} color={Color.RED}>{this.state.confirmpasswordError}</Label>



              <RoundButton text='Sign Up' textColor={Color.WHITE} me={30} ms={30} backgroundColor={Color.BUTTON_PRIMARY} btn_xl border_radius={10} click={this.check_validate} />
            </KeyboardAwareScrollView>
          </View>

        </View>
      </ScrollView>
    )
  }
}

export default Register