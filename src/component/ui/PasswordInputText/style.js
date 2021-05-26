import {StyleSheet} from 'react-native';
import { Color } from '../../../utils/Color';

const styles=StyleSheet.create({
    container:{
       
    },
    txt:{
        marginLeft:10,
        fontSize: 18,
        fontWeight:'bold',
    },
    inputView:{
        backgroundColor:Color.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth:1,
    },
    ic:{
        fontSize:18,
        marginLeft:10,
    },
    iconEye:{
        position:'absolute',
        right:8,
    },
    ic1:{
        fontSize:20,
        
    },
    input:{
        fontSize: 18,
        height: 50,
        width: "80%",
        marginLeft:10,
        
    },
});

export default styles;