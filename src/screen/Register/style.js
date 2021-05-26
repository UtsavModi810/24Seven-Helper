import React from 'react';
import { StyleSheet } from 'react-native';
import {Color} from '../../utils/Color';
import ThemeUtils from '../../utils/ThemeUtils';

const styles=StyleSheet.create({
   
    img:{
       
        marginTop:-175,
        alignSelf:'center',
        justifyContent:'center',
        width:ThemeUtils.relativeWidth(30),
        height:ThemeUtils.relativeHeight(16),
        borderRadius:10,
      },
      content:{
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        backgroundColor:Color.WHITE,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
      },
     
      content1:{
        alignItems:'center',
        justifyContent:'center',
      },
      text2:{
        borderBottomWidth:2,
        borderColor:Color.ORANGE,
    
      },
      text:{
        justifyContent:'space-between',
        alignItems:'center',
      }
    
})

export default styles;