import { StyleSheet } from "react-native";
import { Color } from "../../../utils/Color";
import ThemeUtils from '../../../utils/ThemeUtils';

const styles = StyleSheet.create({
    container:{
        height:ThemeUtils.relativeHeight(7),
        backgroundColor:Color.WHITE,
    },
    text:{
        marginTop:15,
        alignSelf:'center',
        justifyContent:'center',
     },
     ic1:{
        marginRight:20,
        marginTop:-23,
     },
     ic:{
        alignSelf:'flex-end',
     },
})

export default styles