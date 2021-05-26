import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import ThemeUtils from '../../utils/ThemeUtils';

const styles = StyleSheet.create({
    subcontainer:{
        color:Color.WHITE,
    },
    edit: {
        marginLeft:10,
        flexDirection: 'row',

    },
    text:{
        marginTop:40,
        marginLeft:20,
    },
    menuWrapper:{
        marginTop:20,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: Color.GREY,
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
        
    },
});

export default styles;