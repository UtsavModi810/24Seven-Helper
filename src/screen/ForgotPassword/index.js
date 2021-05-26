import React,{ Component } from 'react';
import { View,Image, KeyboardAvoidingView } from 'react-native';
import {FloatingInputText} from '../../component/';
import CommonStyle from '../../utils/CommonStyles';
import styles from './style';
import {Label} from '../../component';
import {Color} from '../../utils/Color';
import { validation } from '../../utils/ValidationUtils';
import {RoundButton} from '../../component';
import Routes from '../../router/routes';
import ThemeUtils from '../../utils/ThemeUtils';



class ForgotPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            
           
        }
    }
    check_validate = () => {
        let emailError,
        isValid;

        emailError = validation('email', this.state.email);

        if (emailError != null){    
        this.setState({
            emailError: emailError,
        });
        isValid = false;
    }
        else {
            this.setState({
                emailError: '',
            });
            isValid = true;
        }
        if (isValid) {
            let obj = {
              email: this.state.email,
            };
            this.props.navigation.navigate(Routes.ResetPassword);
        }
    }




    render(){
        return(
            <View style={CommonStyle.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/images/Sunrise.jpg')} style={{ resizeMode:'stretch',height:ThemeUtils.relativeHeight(30)}} />
                </View>
                <Image source={require('../../assets/images/logo.jpg')} style={styles.img} />

                <View style={styles.content}>
                    <View style={styles.text}>
                        <Label normal bolder color={Color.BLACK} mb={20} mt={20} style={styles.text2}>Forgot Password</Label>
                    </View>
                    <View style={styles.content1}>
                    <KeyboardAvoidingView
                            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
                            enabled={Platform.OS === 'ios' ? true : false}>
                        <FloatingInputText name="at-circle-outline" text="Email" placeholder="Enter Email" 
                        onChangeText={text => this.setState({ email: text })}
                        value={this.state.email}
                        error={this.state.emailError} />
                        <Label align="left" ms={43} color={Color.RED}>{this.state.emailError}</Label>

                        <RoundButton text='Submit' textColor={Color.WHITE} me={30} ms={30} backgroundColor={Color.BUTTON_PRIMARY} btn_xl border_radius={10} click={this.check_validate} />
                    </KeyboardAvoidingView>
                    </View>
                </View>
            </View>
        )
    }
}

export default ForgotPassword;