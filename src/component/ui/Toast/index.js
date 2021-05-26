import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Label from '../Label';

import {Color, ThemeUtils} from '../../../utils';
// import Toast from '../../lib/react-native-another-toast';
import Toast from 'react-native-another-toast';
// import icon from '../../../assets/image/icon1.png';

class Toast extends Component {
    componentDidMount(){
        this.toast.showToast()
    }
  render() {
    return (
      <View>
        <Toast
          content={
              <View>
            <View style={{flexDirection: 'row',
             alignItems: 'center',
             borderTopRightRadius:55,
             borderBottomEndRadius:55,
             borderTopLeftRadius:55,
             borderBottomStartRadius:55,            
             backgroundColor:Color.PRIMARY,
             padding:ThemeUtils.relativeWidth(2),
            }}>
                  
              <Image style={{width: ThemeUtils.relativeHeight(4),
                 height: ThemeUtils.relativeHeight(4),marginLeft:10}} source={require("../../../assets/images/logo1.jpg")} />
              <Label ms={10} small color={Color.WHITE}>
                 {" "}{this.props.text}
              </Label>
             
            </View>
            </View>
          }
          slide="horizontal"
          ref={(c) => {
            this.toast = c;
          }}
        />
      </View>
    );
  }
}
export default Toast;
