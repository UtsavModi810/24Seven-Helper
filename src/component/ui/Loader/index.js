import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native'

export class Loader extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <ActivityIndicator size={this.props.size} color={this.props.color} />
            </View>
        )
    }
}

export default Loader