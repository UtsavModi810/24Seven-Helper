import React from 'react';
import { Text,TextInput, View,StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconc from 'react-native-vector-icons/Ionicons';
import styles from './style';


const PasswordInputText = (props) => {
    
        return(
            <View style={styles.container}>
            
                <Text style={styles.txt}>{props.text}</Text>
                
                <View style={styles.inputView}> 

                <Icon style={styles.ic} name='ios-lock-closed-outline'/>

                <TouchableOpacity onPress={props.onToggle} style={styles.iconEye}>
                    <Iconc style={styles.ic1} name={props.iconName}/> 
                </TouchableOpacity>

                <TextInput style={styles.input} ref={props.ref} placeholder={props.placeholder} 
                secureTextEntry={Boolean(props.visible)} onChangeText={props.onChangeText} value={props.value}/>
                </View>
            </View>

        )  
   
}

export default PasswordInputText;

