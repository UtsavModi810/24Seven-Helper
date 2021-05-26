import React from 'react';
import { StyleSheet } from 'react-native';
import { Color } from '../../utils/Color';
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
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-around',
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
   },
   text3:{
     alignSelf:'flex-end',
     
   },
   img1:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
    justifyContent:'space-around',
    marginTop:20,
    marginLeft:60,
    marginRight:60,
    resizeMode:'contain'
  
     
    },
      
   
  

})

export default styles;