import React ,{Component}from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import { Color } from '../../../utils/Color'
import Label from '../Label';



class Header extends  Component{
    render(){
        return(
            <View style={styles.container} >
        
               <Label style={styles.text} >{this.props.Headertext}</Label>
               <View style={styles.ic1}>
                <Icon name="ios-notifications-outline" style={styles.ic} size={25} color={Color.BLACK}/>
                </View>
        </View>
        )
    }
}


export default Header