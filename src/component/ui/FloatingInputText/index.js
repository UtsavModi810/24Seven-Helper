import React from 'react';
import { Text,TextInput, View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import Label from '../Label';


const FloatingInputText = (props) => {
    
        return(
            <View style={styles.container}>
                
                <Label style={styles.txt}>{props.text}</Label>
                <View style={styles.inputView}> 
                <Icon style={styles.ic} name={props.name}/>
                <TextInput style={styles.input} 
                ref={props.ref} 
                keyboardType={props.keyboardType}
                placeholder={props.placeholder} 
                secureTextEntry={Boolean(props.visible)} 
                onChangeText={props.onChangeText} 
                value={props.value}
                onBlur={props.onBlur}
                error={props.error}/>
                </View>
            </View>

        )
   
}

export default FloatingInputText;

