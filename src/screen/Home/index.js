import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Color} from '../../utils/Color';
import {Header} from '../../component';
import CommonStyle from '../../utils/CommonStyles';
import ImageSlider from '../ImageSlider';
import styles from './style';


class Home extends Component {

    render() {
        return (
          <View style={CommonStyle.container}>
            <Header Headertext="Home"/>
           
        <View style={styles.img}>

            <ImageSlider/> 
         
            
          
         </View> 
        </View>
        )
    }
}

export default Home
